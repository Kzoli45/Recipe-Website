import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                jersey: ['Jersey 25', ...defaultTheme.fontFamily.sans]
            },
        },
    },

    plugins: [forms, 
        require('daisyui'), 
        require('preline/plugin'), 
        "prettier-plugin-tailwindcss"],
};
