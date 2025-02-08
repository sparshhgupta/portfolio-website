module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#111827",
          
"secondary": "#374151",
          
"accent": "#f3f4f6",
          
"neutral": "#6b7280",
          
"base-100": "#1f2937",
          
"info": "#6b7280",
          
"success": "#00ff00",
          
"warning": "#84cc16",
          
"error": "#facc15",
          },
        },
      ],
    },
    plugins: [
      require('daisyui'),
    ],
    //...
  }