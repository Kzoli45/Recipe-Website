import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        'node_modules/preline/dist/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                jersey: ['Jersey 25', ...defaultTheme.fontFamily.sans]
            },
        },
        screens: {
            'xs': '300px',
            ...defaultTheme.screens,
          },
    },

    plugins: [forms, 
        require('daisyui'), 
        require('preline/plugin'), 
        "prettier-plugin-tailwindcss"],

    darkMode: 'selector',

};
