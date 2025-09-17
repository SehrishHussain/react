import initialPosts from "../../mock/posts.json";

const STORAGE_KEY = "mock_posts_v1";
const delay = (ms = 200) => new Promise(resolve => setTimeout(resolve, ms));

function _ensureInitialized() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPosts));
  }
}

function _loadPosts() {
  _ensureInitialized();
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse mock posts from localStorage", e);
    return [];
  }
}

function _savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

async function getPosts({ q, limit = 20, offset = 0 } = {}) {
  await delay();
  let posts = _loadPosts();
  if (q) {
    const lower = q.toLowerCase();
    posts = posts.filter(
      p =>
        p.title.toLowerCase().includes(lower) ||
        p.content.toLowerCase().includes(lower)
    );
  }
  const total = posts.length;
  const items = posts.slice(offset, offset + limit);
  return { items, total };
}

async function getPostById(id) {
  await delay();
  const posts = _loadPosts();
  return posts.find(p => p.id === id) || null;
}

async function createPost({ title, content, author }) {
  await delay();
  const posts = _loadPosts();
  const id = String(Date.now());
  const newPost = {
    id,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
    tags: []
  };
  posts.unshift(newPost);
  _savePosts(posts);
  return newPost;
}

async function updatePost(id, patch) {
  await delay();
  const posts = _loadPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) throw new Error("Post not found");
  const updated = { ...posts[idx], ...patch };
  posts[idx] = updated;
  _savePosts(posts);
  return updated;
}

async function deletePost(id) {
  await delay();
  const posts = _loadPosts();
  const filtered = posts.filter(p => p.id !== id);
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
  getPostById,
  createPost,
  updatePost,
  deletePost,
  resetDemoData
};
