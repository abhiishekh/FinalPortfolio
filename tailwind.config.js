

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainbg:'#DEE3FF',
        live:'#747FE0'
      },
      spacing:{
        '75':'400px'
      },
      scale: {
        '1.5': '1.5rem', 
        '2': '2rem',     
        '2.5': '2.5rem',
        '3': '3rem',
      },
      
    },
  },
  plugins: [addVariablesForColors],
  plugins: [],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}