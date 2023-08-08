/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1440px",
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            primary: {
                DEFAULT: "#3b82f6",
                100: "#dbeafe",
                200: "#bfdbfe",
                300: "#93c5fd",
                400: "#60a5fa",
                500: "#3b82f6",
                600: "#2563eb",
                700: "#1d4ed8",
                800: "#1e40af",
                900: "#1e3a8a",
            },
            secondary: {
                DEFAULT: "#a855f7",
                100: "#f3e8ff",
                200: "#e9d5ff",
                300: "#d8b4fe",
                400: "#c084fc",
                500: "#a855f7",
                600: "#9333ea",
                700: "#7e22ce",
                800: "#6b21a8",
                900: "#581c87",
            },
            success: {
                lighter: "#bef264",
                bolder: "#65a30d",
                DEFAULT: "#84cc16",
            },
            error: {
                lighter: "#f87171",
                bolder: "#ef4444",
                DEFAULT: "#dc2626",
            },
            warning: {
                lighter: "#fde047",
                bolder: "#eab308",
                DEFAULT: "#facc15",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
