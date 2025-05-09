# How to Test the Dilon Concept DAO (Simplified) Website Locally

This guide provides step-by-step instructions for testing the simplified Dilon Concept DAO website on your local machine.

## Prerequisites

1.  **Python 3:** You need to have Python 3 installed on your system. You can download it from [python.org](https://www.python.org/downloads/). To check if you have Python 3 installed, open your terminal or command prompt and type:
    ```bash
    python3 --version
    ```
    If it returns a version number (e.g., Python 3.x.x), you are good to go. If not, please install it.

2.  **Website Files:** You will need the website files. These include:
    *   `index.html`
    *   `src/styles.css`
    *   `src/app.js`
    These files should be organized in a folder structure like this:
    ```
    your_project_folder/
    ├── index.html
    └── src/
        ├── app.js
        └── styles.css
    ```
    You can download these files from the package I will provide later or set them up as created in the previous steps.

## Local Testing Steps

1.  **Navigate to the Project Directory:**
    Open your terminal or command prompt.
    Use the `cd` (change directory) command to navigate to the folder where you have saved the `index.html` file and the `src` folder (e.g., `your_project_folder` from the example above).
    ```bash
    cd path/to/your_project_folder
    ```

2.  **Start the Local HTTP Server:**
    Once you are inside the correct directory (the one containing `index.html`), run the following command in your terminal:
    ```bash
    python3 -m http.server 8000
    ```
    *   This command tells Python to start a simple HTTP server.
    *   `8000` is the port number. If port 8000 is already in use by another application, you can choose a different port number (e.g., 8001, 8888).
    You should see output similar to this in your terminal:
    ```
    Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
    ```
    This means the server is running and ready to serve your website files.

3.  **Access the Website in Your Browser:**
    Open your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).
    In the address bar, type:
    ```
    http://localhost:8000
    ```
    If you used a different port number in the previous step, replace `8000` with that port number (e.g., `http://localhost:8001`).
    Press Enter.

4.  **Verify Website Functionality:**
    Once the website loads in your browser, you should check the following:
    *   **Page Title:** The browser tab should display "Dilon Concept DAO - Simplified".
    *   **Header:** The main heading "Welcome to the Dilon Concept DAO (Simplified Version)" should be visible.
    *   **Navigation:**
        *   The "Home" and "About" links should be present in the navigation bar.
        *   Clicking the "Home" link should smoothly scroll the page to the "Home Section".
        *   Clicking the "About" link should smoothly scroll the page to the "About Section".
    *   **Content Sections:**
        *   The "Home Section" with its placeholder text should be visible.
        *   The "About Section" with its placeholder text should be visible.
    *   **Styling (CSS):** The website should have basic styling (e.g., dark header and footer, light background for content areas, readable font).
    *   **Footer:** The footer text "© 2025 Dilon Concept DAO. All rights reserved." should be visible at the bottom of the page.
    *   **JavaScript Interactivity:** The smooth scrolling for navigation links should work.
    *   **Browser Console:** Open your browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect" or "Inspect Element", then navigating to the "Console" tab). Check for any error messages. There should be no errors related to the website's code. You might see a "GET /favicon.ico HTTP/1.1" 404 error, which is normal for this simplified setup as we haven't included a favicon.

5.  **Stop the Local HTTP Server:**
    Once you are done testing, go back to your terminal or command prompt where the server is running.
    Press `Ctrl+C` (or `Cmd+C` on macOS) to stop the server.
    The terminal will return to the normal command prompt.

## Troubleshooting Common Issues

*   **"python3: command not found" or similar:** Python 3 is not installed or not added to your system's PATH. Please install Python 3 from [python.org](https://www.python.org).
*   **"No such file or directory" when running the server:** You are not in the correct directory. Make sure you `cd` into the folder that directly contains `index.html`.
*   **Port already in use:** If you see an error like `OSError: [Errno 98] Address already in use`, it means another application is using port 8000. Try a different port number when starting the server (e.g., `python3 -m http.server 8001`).
*   **Website doesn't load or looks broken:**
    *   Double-check the URL in your browser: `http://localhost:8000` (or your chosen port).
    *   Ensure the `index.html`, `src/styles.css`, and `src/app.js` files are correctly named and in the right locations.
    *   Check the browser console for errors that might indicate problems with loading CSS or JavaScript files.

These instructions should help you test the simplified Dilon Concept DAO website locally. If you encounter any issues not covered here, please provide the error messages and a description of the problem.
