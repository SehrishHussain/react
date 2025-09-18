import postsData from "../mockData/posts.json";

const STORAGE_KEY = "mock_posts_v1";
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Normalize any raw post (from JSON, localStorage, or user input)
 * into a consistent shape that the app expects.
 */
function _normalize(post) {
  return {
    id: post.id || post.$id, // prefer id but fall back to $id
    title: post.title,
    content: post.content,
    userId: post.userId || post.author || null, // always store as userId
    tags: post.tags || [],
    createdAt: post.createdAt || new Date().toISOString(),
    updatedAt: post.updatedAt || post.createdAt || new Date().toISOString(),
    slug: post.slug,
    redirects: post.redirects || [],
    featuredImage: post.featuredImage || null,
    views: post.views || 0,
  };
}

function _ensureInitialized() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    // Normalize posts from JSON before saving
    const normalized = postsData.map(_normalize);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  }
}

function _loadPosts() {
  _ensureInitialized();
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return JSON.parse(raw).map(_normalize);
  } catch (e) {
    console.error("Failed to parse mock posts from localStorage", e);
    return [];
  }
}

function _savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-"); // replace spaces & special chars with -
}




/* -------------------- PUBLIC API -------------------- */

async function getPosts({ q, limit = 20, offset = 0 } = {}) {
  await delay();
  let posts = _loadPosts();
  console.log("📌 getPosts raw posts:", posts);

  if (q) {
    const lower = q.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.content.toLowerCase().includes(lower)
    );
  }

  const total = posts.length;
  const documents = posts.slice(offset, offset + limit);

  return { total, documents };
}

async function getPost(slug) {
  await delay();
  const posts = _loadPosts();
  const post = posts.find(
    (p) => p.slug === slug || (p.redirects || []).includes(slug)
  );
  return post || null;
}

async function getUserPosts(userId, { limit = 20, offset = 0 } = {}) {
  await delay();
  let posts = _loadPosts().filter((p) => p.userId === userId);

  const total = posts.length;
  const documents = posts.slice(offset, offset + limit);

  return { total, documents };
}

async function getPostById(id) {
  await delay();
  const posts = _loadPosts();
  const post = posts.find((p) => p.id === id);
  return post || null;
}

async function createPost({ title, content, author }) {
  await delay();
  const posts = _loadPosts();
  const id = String(Date.now());
  const now = new Date().toISOString();

  // Generate unique slug
  let baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  const newPost = _normalize({
    id,
    title,
    content,
    userId: author,
    createdAt: now,
    updatedAt: now,
    tags: [],
    slug,
    redirects: [],
  });

  posts.unshift(newPost);
  _savePosts(posts);

  return newPost;
}

async function updatePost(id, patch) {
  await delay();
  const posts = _loadPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) throw new Error("Post not found");

  const now = new Date().toISOString();
  let updated = { ...posts[idx], ...patch, updatedAt: now };

  // If title changed → regenerate slug + keep redirects
  if (patch.title && patch.title !== posts[idx].title) {
    const baseSlug = slugify(patch.title);
    let slug = baseSlug;
    let counter = 1;
    while (posts.some((p) => p.slug === slug && p.id !== id)) {
      slug = `${baseSlug}-${counter++}`;
    }

    updated.redirects = [...(posts[idx].redirects || []), posts[idx].slug];
    updated.slug = slug;
  }

  posts[idx] = _normalize(updated);
  _savePosts(posts);

  return posts[idx];
}

async function deletePost(id) {
  await delay();
  const posts = _loadPosts();
  const filtered = posts.filter((p) => p.id !== id);
  _savePosts(filtered);
  return { success: true };
}

async function resetDemoData() {
  localStorage.removeItem(STORAGE_KEY);
  _ensureInitialized();
  return true;
}

export default {
  getPosts,
  getUserPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  resetDemoData,
  getPost,
};
