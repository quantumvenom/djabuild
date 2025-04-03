export default {
  // Specify the build output directory
  outDir: "dist",
  // Enabling SPA mode ensures Cloudflare Pages will return your index.html for any route
  enableSPA: true,
  // Specify the build command
  buildCommand: "npm run build",
  // Specify the root directory for the build
  root: "client",
} 