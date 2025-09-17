import users from "../../mock/users.json";

const USER_KEY = "mock_user_v1";
const delay = (ms = 150) => new Promise(resolve => setTimeout(resolve, ms));

async function login(email, password) {
  await delay();
  let user = users.find(u => u.email === email);
  if (!user) {
    user = users[0];
  }
  const token = "mock-token-" + btoa(user.id + ":" + Date.now());
  const payload = { user, token };
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
    return JSON.parse(raw);
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
