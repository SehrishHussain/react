import users from "../mock/users.json";

const USER_KEY = "mock_user_v1";
const delay = ms => new Promise(r => setTimeout(r, ms));

export async function login(email, password) {
  await delay(100);
  // demo: accept any password; find user by email or fallback to first user
  const user = users.find(u => u.email === email) || users[0];
  const token = "mock-token-" + btoa(user.id + ":" + Date.now());
  const payload = { user, token };
  localStorage.setItem(USER_KEY, JSON.stringify(payload));
  return payload;
}

export async function logout() {
  localStorage.removeItem(USER_KEY);
  return true;
}

export async function getCurrentUser() {
  await delay(20);
  return JSON.parse(localStorage.getItem(USER_KEY) || "null");
}

export default { login, logout, getCurrentUser };
