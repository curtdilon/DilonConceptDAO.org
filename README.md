# Dilon Concept DAO - Simplified Website

This repository contains the files for the simplified Dilon Concept DAO website. It is a static HTML, CSS, and JavaScript website designed to be easily testable locally and deployable via Netlify.

## Project Structure

```
website_v2/
├── index.html             # Main HTML file
├── netlify.toml           # Netlify deployment configuration
├── src/
│   ├── app.js             # JavaScript for interactivity
│   ├── styles.css         # CSS for styling
│   └── images/
│       └── dilon_concept_logo.png # Logo image
├── local_testing_documentation.md # Internal documentation of local tests performed
└── local_testing_instructions_for_user.md # Instructions for user to test locally
```

## How to Test Locally

1.  **Prerequisites:** Ensure you have Python 3 installed.
2.  **Clone/Download:** Get the files into a local directory.
3.  **Navigate to Directory:** Open your terminal/command prompt and `cd` into the `website_v2` directory (the one containing `index.html`).
4.  **Start Server:** Run `python3 -m http.server 8000` (or another port if 8000 is in use).
5.  **Open in Browser:** Go to `http://localhost:8000` in your web browser.

Refer to `local_testing_instructions_for_user.md` for more detailed steps and troubleshooting.

## Deployment to Netlify

1.  Push this `website_v2` directory (including `netlify.toml` at its root) to a GitHub repository.
2.  Connect your GitHub repository to Netlify.
3.  Netlify should automatically detect the settings from `netlify.toml`.
    *   **Publish directory:** `.` (relative to the root of the `website_v2` folder in your repo)
    *   **Build command:** (leave blank or as specified in `netlify.toml` - none needed for this static site)
4.  Deploy the site.

