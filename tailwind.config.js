/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontSize: {
        'h1': '4rem',
        'h2': '3rem',
        'h3': '2.25rem',
        'h4': '1.875rem',
        'h5': '1.5rem',
        'h6': '1.25rem',
      },
    },
  },
  plugins: [],
}

