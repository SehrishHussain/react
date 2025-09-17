const useMock = import.meta.env.VITE_USE_MOCK === "true";

let authService;
let blogService;

if (useMock) {
  console.log("⚡ Using MOCK services");
  ({ authService } = await import("./mock/mockAuthService.js"));
  ({ blogService } = await import("./mock/mockBlogService.js"));
} else {
  console.log("✅ Using REAL Appwrite services");
  ({ authService } = await import("./real/authService.js"));
  ({ blogService } = await import("./real/blogService.js"));
}

export { authService, blogService };
