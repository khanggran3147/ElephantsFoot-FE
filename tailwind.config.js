module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in src folder
    "./public/index.html",         // Ensure Tailwind scans the main HTML file
  ],
  theme: {
    extend: {}, // Customize your theme if needed
  },
  plugins: [], // Add any Tailwind plugins you need
}