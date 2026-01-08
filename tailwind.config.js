/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto_400Regular', 'Roboto', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto_400Regular', 'Roboto'],
        'roboto-medium': ['Roboto_500Medium', 'Roboto'],
        'roboto-bold': ['Roboto_700Bold', 'Roboto'],
      },
      colors: {
        primary: "#F0034E",
        secondary: "#3EB0DE",
        tertiary: "#F71",
        primaryDark: "#C0023B",
        secondaryDark: "#2A7FAE",
        tertiaryDark: "#CC6600",
        primaryLight: "#FF3366",
        secondaryLight: "#66CFFF",
        tertiaryLight: "#FF884D",
},
    },
  },
  plugins: [],
};


