import users from "../mockData/users.json";

const USER_KEY = "mock_user_v1";
const delay = (ms = 150) => new Promise(resolve => setTimeout(resolve, ms));

function _mapUser(u) {
  if (!u) return null;
  return {
    $id: u.id,
    name: u.name,
    email: u.email,
    role: u.role || "reader",
    $createdAt: u.createdAt || new Date().toISOString(),
    $updatedAt: u.updatedAt || u.createdAt || new Date().toISOString()
  };
}

async function login(email, password) {
  await delay();
  // For now ignore password check
  let user = users.find(u => u.email === email);
  if (!user) {
    // fallback to first mock user
    user = users[0];
  }

  const token = "mock-token-" + btoa(user.id + ":" + Date.now());
  const mappedUser = _mapUser(user);

  const payload = { user: mappedUser, token };
  localStorage.setItem(USER_KEY, JSON.stringify(payload));
  return payload;
}

async function logout() {
  localStorage.removeItem(USER_KEY);
  return true;
}

async function getCurrentUser() {
  await delay();
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return {
      user: _mapUser(parsed.user),
      token: parsed.token
    };
  } catch (e) {
    console.error("Mock auth parse error", e);
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser
};
