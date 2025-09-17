import initialPosts from "../mock/posts.json";

const STORAGE_KEY = "mock_posts_v1";

// small helper to simulate network delay
const delay = (ms = 150) => new Promise(r => setTimeout(r, ms));

function _ensureInitialized() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPosts));
  }
}

function _load() {
  _ensureInitialized();
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function _save(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return posts;
}

export async function getPosts({ q, limit = 20, offset = 0 } = {}) {
  await delay();
  let posts = _load();
  if (q) {
    const ql = q.toLowerCase();
    posts = posts.filter(p => p.title.toLowerCase().includes(ql) || p.content.toLowerCase().includes(ql));
  }
  return { items: posts.slice(offset, offset + limit), total: posts.length };
}

export async function getPostById(id) {
  await delay();
  const posts = _load();
  return posts.find(p => p.id === id) || null;
}

export async function createPost({ title, content, author }) {
  await delay();
  const posts = _load();
  const id = String(Date.now());
  const newPost = { id, title, content, author, createdAt: new Date().toISOString(), tags: [] };
  posts.unshift(newPost); // newest first
  _save(posts);
  return newPost;
}

export async function updatePost(id, patch) {
  await delay();
  const posts = _load();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) throw new Error("Not found");
  posts[idx] = { ...posts[idx], ...patch };
  _save(posts);
  return posts[idx];
}

export async function deletePost(id) {
  await delay();
  let posts = _load();
  posts = posts.filter(p => p.id !== id);
  _save(posts);
  return { success: true };
}

export async function resetDemoData() {
  localStorage.removeItem(STORAGE_KEY);
  _ensureInitialized();
  return true;
}

// default export object for easy swapping
export default { getPosts, getPostById, createPost, updatePost, deletePost, resetDemoData };
