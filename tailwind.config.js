const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        fontFamily: {
            display: ['Plantagenet Cherokee', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                may: {
                    bg: "#b26577",
                    fg: "#e7e0c6"
                }
            }
        }
    }
};
