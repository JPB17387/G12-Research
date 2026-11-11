# Determinants of Smartphone Addiction on Academic Performance

An interactive, multi-page web presentation of a Grade 12 Practical Research 2 study conducted at Dumanjug National High School. The study examines smartphone addiction and academic performance among senior high school students. The site publishes the study's abstract, five research chapters, references, appendices, researcher profiles, curriculum vitae, and contact information.

## Core Features

- A landing page that redirects to the research homepage.
- Five chapters covering scope, related literature, methodology, data analysis, and findings.
- Responsive desktop and mobile navigation.
- Light/dark theme toggle, persisted in the browser under the `g12-theme` local-storage key.
- Canvas-based particle background, scroll-reveal effects, and accordion content.
- Locally stored author and donation-QR image assets.

## Tech Stack & Architecture

- **Languages:** HTML5, CSS3, and browser-native JavaScript.
- **Architecture:** Dependency-free, static multi-page website. There is no server-side application, API, build pipeline, package manager, or bundler in this repository.
- **Entry point:** `index.html` redirects to `html/homepage.html` using both a meta refresh and a JavaScript fallback.
- **Shared presentation layer:** Every content page loads `css/global.css`; each page then loads its own stylesheet from `css/`.
- **Shared behavior:** Every content page loads `js/global.js`, which implements particles, theme persistence, responsive navigation, active-link highlighting, scroll reveals, and accordions.
- **Data and persistence:** Research data is rendered directly in the HTML. The only browser persistence is the selected theme in `localStorage`; no database, migration, seed process, or external API is used.
- **Assets:** Author portraits and the donation QR code are committed under `Images/`. Source research artifacts (PDF, DOCX, PPTX, and extracted text) are retained under `Research reference/` and are not runtime dependencies of the website.
- **Third-party browser resources:** `css/global.css` imports Google Fonts; all pages load the Buy Me a Coffee widget from `cdnjs.buymeacoffee.com`; `html/Chapter 3.html` loads MathJax 3 from `cdn.jsdelivr.net` to render formulas. These are network-dependent enhancements.

## Prerequisites & System Requirements

No language runtime, package manager, database, or dependency installation is required by this repository. It contains no `package.json`, lockfile, `requirements.txt`, `docker-compose` file, or equivalent build/runtime manifest.

To view the site, use a current graphical browser with JavaScript enabled. A local HTTP server is optional; direct opening of `index.html` is supported by the repository's relative paths and redirect.

An internet connection is needed only for the remote fonts, donation widget, and Chapter 3 MathJax rendering. The core HTML, CSS, JavaScript, and locally referenced images remain in the repository.

## Step-by-Step Local Setup & Installation Guide

### 1. Clone and enter the repository

```powershell
git clone https://github.com/JPB17387/G12-Research.git
Set-Location 'G12-Research'
```

If you already have a checkout, enter its root directory instead:

```powershell
Set-Location 'C:\path\to\G12-Research'
```

### 2. Install dependencies

There are no dependencies to install. Do not run `npm install`, `pip install`, or database initialization commands: none are defined by this repository.

### 3. Environment configuration

No `.env` or `.env.example` file exists, and the site does not read environment variables. No environment configuration or secrets are required.

### 4. Database setup / initialization

Not applicable. The project has no database, ORM, migration files, seed scripts, or local data store beyond the browser's `localStorage` theme preference.

## Running the Project Locally

### Directly in a browser

Open [`index.html`](index.html). It redirects to [`html/homepage.html`](html/homepage.html), which is the application homepage.

### With a local HTTP server

The repository does not prescribe a server command. If your machine already has Python 3 available, its standard-library server can optionally be started from the repository root:

```powershell
python -m http.server 8000
```

Then browse to `http://localhost:8000/`. Stop the optional server with `Ctrl+C`.

There is no development build, production build, background worker, client/server concurrency command, or deployment command defined in this checkout.

## Project Structure

```text
G12-Research/
|-- index.html                         # Redirecting entry page
|-- README.md                          # Project recovery and setup documentation
|-- LICENSE                            # MIT License
|-- update-paths.ps1                   # One-off path-rewrite utility (modifies HTML)
|-- html/                              # Research pages and navigation targets
|   |-- homepage.html                  # Main research landing page
|   |-- Chapter 1.html ... Chapter 5.html
|   |-- About authors.html
|   |-- Contact us.html
|   |-- References.html
|   |-- Apendices.html                 # Filename intentionally uses this spelling
|   `-- Curriculum Vitae.html
|-- css/                               # Shared and page-specific stylesheets
|   |-- global.css
|   |-- homepage.css
|   |-- chapter 1.css                  # Filename uses lowercase "chapter"
|   `-- [page-specific CSS files]
|-- js/
|   `-- global.js                      # Shared browser interactions
|-- Images/
|   |-- authors/                       # Researcher portrait images
|   `-- public/                        # Donation QR code
`-- Research reference/                # Original/source research materials
    |-- *.docx
    |-- *.pdf
    |-- *.pptx
    `-- extracted_*.txt
```

## Operational Notes

- Keep the directory structure intact. HTML pages reference shared resources with relative paths such as `../css/global.css`, `../js/global.js`, and `../Images/...`.
- Preserve the exact filename casing and spaces shown above. In particular, links target `Apendices.html` and Chapter 1 references `css/chapter 1.css`.
- `update-paths.ps1` contains hard-coded paths and writes changes into every file in `html/`. It is not part of normal setup or runtime; use it only when intentionally reorganizing paths and after reviewing its effects.
- The theme default is dark. Clearing browser site data removes the saved theme selection.

## License

This project is licensed under the [MIT License](LICENSE).
