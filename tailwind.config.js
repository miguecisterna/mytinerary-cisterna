/** @type {import('tailwindcss').Config} */

export const mode = 'jit';
export const content = [
  './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  
  extend: {
    fontFamily:{
      'homemadeApple':['Homemade Apple', 'cursive'],
      'preahvihear':['Preahvihear', 'sans-serif']
    }
  }
};
export const variants = {};
export const plugins = [];