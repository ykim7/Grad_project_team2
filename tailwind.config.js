/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-purple": "#9F69B8",
        "gradient-blue": "#4D8BCC",
        "button-color": "#318EC2",
        "bg-color": "#DEE6EC",
        "font-color": "#555555",
        "community-color": "#B5A8F0",
        "job-color": "#318EC2",
        "flea-color": "#FCE588",
        "educational-color": "#FF2400",
        "weather-color1": "#00D2FF",
        "weather-color2": "#3A7BD5",
      },
      fontFamily: {
        abel: ["abel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
