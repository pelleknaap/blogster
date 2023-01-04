/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro", "./src/**/*.md", "./src/**/*.svelte"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          purple: "rgb(var(--color-primary-purple) / <alpha-value>)",
          green: "rgb(var(--color-primary-green) / <alpha-value>)",
          yellow: "rgb(var(--color-primary-yellow) / <alpha-value>)",
          red: "rgb(var(--color-primary-red) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
        },
        text: {
          body: "rgb(var(--color-text-body) / <alpha-value>)",
          bold: "rgb(var(--color-text-bold) / <alpha-value>)",
          heading: "rgb(var(--color-text-heading) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          code: "rgb(var(--color-text-code) / <alpha-value>)",
          link: "rgb(var(--color-text-link) / <alpha-value>)",
          selection: "rgb(var(--color-text-selection) / <alpha-value>)",
        },
        input: {
          border: "rgb(var(--color-input-border) / <alpha-value>)",
        },
        bg: {
          body: "rgb(var(--color-bg-body) / <alpha-value>)",
          code: "rgb(var(--color-bg-code) / <alpha-value>)",
          selection: "rgb(var(--color-bg-selection) / <alpha-value>)",
        },
        border: {
          code: "rgb(var(--color-border-code) / <alpha-value>)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ul: {
              paddingLeft: 0,
              listStyle: "none",
            },
            "ul > li": {
              position: "relative",
              paddingLeft: "1.375rem",
            },
            "ul > li::before": {
              position: "absolute",
              left: 0,
              content: '"»"',
              color: "rgb(var(--color-text-muted))",
            },
            ol: {
              paddingLeft: "1.125rem",
            },
            "ol > li::marker": {
              color: "rgb(var(--color-text-muted))",
            },
            "h1, h2, h3, h4, h5": {
              color: "rgb(var(--color-text-heading))",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            h1: {
              fontSize: "1.5rem",
              '@media (min-width: theme("screens.md"))': {
                fontSize: '2.25rem',
              },
            },
            h2: {
              fontSize: "1.25rem",
              '@media (min-width: theme("screens.md"))': {
                fontSize: '1.5rem',
              },
            },
            h3: {
              fontSize: "1.15rem",
              '@media (min-width: theme("screens.md"))': {
                fontSize: '1.25rem',
              },
            }
          },
        },
        bubblegum: {
          css: {
            "--tw-prose-body": "rgb(var(--color-text-body))",
            "--tw-prose-headings": "rgb(var(--color-text-heading))",
            "--tw-prose-lead": "rgb(var(--color-text-body))",
            "--tw-prose-links": "rgb(var(--color-text-body))",
            "--tw-prose-bold": "rgb(var(--color-text-bold))",
            "--tw-prose-counters": "rgb(var(--color-text-muted))",
            "--tw-prose-bullets": "rgb(var(--color-text-muted))",
            "--tw-prose-hr": "rgb(var(--color-text-muted))",
            "--tw-prose-quotes": "rgb(var(--color-text-body))",
            "--tw-prose-quote-borders": "rgb(var(--color-text-muted))",
            "--tw-prose-captions": "rgb(var(--color-primary-heading))",
            "--tw-prose-quote-captions": "rgb(var(--color-primary-heading))",
            "--tw-prose-code": "rgb(var(--color-text-code))",
            "--tw-prose-pre-code": "rgb(var(--color-text-code))",
            "--tw-prose-pre-bg": "rgb(var(--color-bg-code))",
            "--tw-prose-th-borders": "rgb(var(--color-text-muted))",
            "--tw-prose-td-borders": "rgb(var(--color-text-muted))",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
