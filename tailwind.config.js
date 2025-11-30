module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        readdylinkblack: "var(--readdylinkblack)",
        "readdylinkblack-70": "var(--readdylinkblack-70)",
        "readdylinkgray-chateau": "var(--readdylinkgray-chateau)",
        readdylinkmischka: "var(--readdylinkmischka)",
        "readdylinkold-gold": "var(--readdylinkold-gold)",
        "readdylinkpale-sky": "var(--readdylinkpale-sky)",
        "readdylinkwhite-cod-gray": "var(--readdylinkwhite-cod-gray)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "readdy-link-montserrat-body":
          "var(--readdy-link-montserrat-body-font-family)",
        "readdy-link-montserrat-regular":
          "var(--readdy-link-montserrat-regular-font-family)",
        "readdy-link-semantic-button":
          "var(--readdy-link-semantic-button-font-family)",
        "readdy-link-semantic-heading-2":
          "var(--readdy-link-semantic-heading-2-font-family)",
        "readdy-link-semantic-heading-3":
          "var(--readdy-link-semantic-heading-3-font-family)",
        "readdy-link-semantic-heading-4":
          "var(--readdy-link-semantic-heading-4-font-family)",
        "readdy-link-semantic-input":
          "var(--readdy-link-semantic-input-font-family)",
        "readdy-link-semantic-item":
          "var(--readdy-link-semantic-item-font-family)",
        "readdy-link-semantic-link":
          "var(--readdy-link-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
