# Determinants of Smartphone Addiction on Academic Performance

A comprehensive research study investigating the impact of smartphone addiction on the academic performance of Senior High School students at Dumanjug National High School.

## Project Overview

This is a G12 Practical Research 2 capstone project presented as an interactive, modern web-based research paper. The study explores the relationship between smartphone addiction and academic performance among senior high school students, providing insights, data analysis, and recommendations.

**Authors:**
- Je-in M. Malig-on
- Jhon Paul A. Baonil

**Institution:** Dumanjug National High School

## Research Focus

- **Main Question:** How does smartphone addiction affect the academic performance of senior high school students?
- **Scope:** Senior high school students at Dumanjug National High School
- **Methodology:** Practical Research 2 study
- **Deliverables:** 5 chapters, references, appendices, and author biographies

## Features

### Interactive Web Experience
- **Dark & Light Theme Toggle:** Switch between professional dark and light modes
- **Animated Particle Background:** Animated particles with connection lines for visual appeal
- **Responsive Navigation:** Desktop and mobile-friendly navigation with hamburger menu
- **Smooth Scrolling:** Scroll animations and smooth page transitions
- **Modern UI Design:** Glassmorphism effects, gradients, and professional typography

### Content Sections
- **Homepage:** Hero section with study overview and quick navigation
- **5 Research Chapters:** Detailed chapters covering research methodology, findings, and analysis
- **About Authors:** Author biographies and credentials
- **References:** Complete bibliography and citations
- **Appendices:** Supporting data and supplementary materials
- **Curriculum Vitae:** Author academic and professional information
- **Contact Us:** Contact information for inquiries

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:**
  - CSS custom properties (variables) for theme management
  - Glassmorphism and modern UI patterns
  - Responsive grid and flexbox layouts
- **Fonts:** 
  - Playfair Display (headings)
  - Inter (body text)
  - Space Grotesk (labels)
- **Animations:** Canvas-based particle system, CSS transitions
- **Design:** Mobile-first responsive design

## Project Structure

```
G12 Research/
├── index.html              # Entry point with redirect
├── update-paths.ps1        # PowerShell script for path updates
├── README.md              # Project documentation (this file)
├── LICENSE                # MIT License
│
├── html/                  # Page content
│   ├── homepage.html
│   ├── Chapter 1.html
│   ├── Chapter 2.html
│   ├── Chapter 3.html
│   ├── Chapter 4.html
│   ├── Chapter 5.html
│   ├── About authors.html
│   ├── References.html
│   ├── Apendices.html
│   ├── Contact us.html
│   └── Curriculum Vitae.html
│
├── css/                   # Styling
│   ├── global.css         # Global design system and themes
│   ├── homepage.css
│   ├── Chapter 1.css
│   ├── Chapter 2.css
│   ├── Chapter 3.css
│   ├── Chapter 4.css
│   ├── Chapter 5.css
│   ├── About authors.css
│   ├── References.css
│   ├── Apendices.css
│   ├── Contact us.css
│   └── Curriculum Vitae.css
│
├── js/                    # JavaScript functionality
│   └── global.js          # Particles, theme toggle, navbar, scroll effects
│
├── Images/                # Project assets
│   ├── authors/
│   └── backgrounds/
│
└── Research reference/    # Source materials
    ├── extracted_cover.txt
    └── extracted_text.txt
```

## Design System

### Color Palette
- **Primary:** `#6C63FF` (Purple)
- **Secondary:** `#00D4AA` (Cyan/Teal)
- **Accent:** `#FF6B9D` (Pink)
- **Background (Dark):** `#0a0e1a`
- **Background (Light):** `#f0f2ff`

### Typography
- **Headings:** Playfair Display (serif) - elegant and academic
- **Body:** Inter - clean and readable
- **Labels:** Space Grotesk - modern and geometric

### Features
- Dark & Light theme support with CSS custom properties
- Smooth transitions and animations
- Glassmorphism effects on cards and modals
- Responsive spacing system
- Professional shadow system for depth

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge recommended)
- No build tools or dependencies required

### Installation & Running

1. **Clone or Download:**
   ```bash
   git clone <repository-url>
   cd "G12 Research"
   ```

2. **Open in Browser:**
   - Direct: Open `index.html` in your web browser
   - Or serve locally using a simple HTTP server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server installed)
     http-server
     ```

3. **Access the Site:**
   - Local: `http://localhost:8000`
   - Or open `index.html` directly in your browser

### Using the Theme Toggle
- Click the moon/sun icon (🌙) in the top-right corner to toggle between dark and light themes
- Theme preference is persisted in browser storage

## Navigation Guide

- **Homepage:** Overview and quick links to all sections
- **Chapters:** Read through 5 research chapters in sequence
- **References:** View all sources and citations
- **Appendices:** Access supplementary data and materials
- **About Authors:** Learn about the researchers
- **CV:** View academic and professional information
- **Contact:** Get in touch with the authors

## Customization

### Modifying Colors & Theme
Edit the CSS custom properties in [css/global.css](css/global.css):
```css
:root {
  --color-primary: #6C63FF;
  --color-secondary: #00D4AA;
  /* ... other variables */
}
```

### Adding New Pages
1. Create new HTML file in `html/` folder
2. Create corresponding CSS file in `css/` folder
3. Add navigation link in navbar and mobile menu
4. Include `global.css` and `global.js` for consistency

### Modifying Content
- Edit HTML files in the `html/` folder
- Update styles in corresponding CSS files
- Content is separated from styling for easy maintenance

## JavaScript Features

### global.js Functions
- **Particles Animation:** Animated floating particles with interactive connections
- **Theme Toggle:** Seamless switching between dark and light themes
- **Responsive Navigation:** Mobile hamburger menu with smooth transitions
- **Scroll Effects:** Smooth reveal animations on page scroll
- **Active Link Detection:** Automatic highlighting of current page in navigation

## Assets

### Images
- Author profiles in `Images/authors/`
- Background images in `Images/backgrounds/`

### Research Materials
- Extracted cover page: `Research reference/extracted_cover.txt`
- Extracted text: `Research reference/extracted_text.txt`

##  Future Enhancements

- [ ] Search functionality across chapters
- [ ] PDF export of full research paper
- [ ] Citation tools (BibTeX, APA, etc.)
- [ ] Interactive data visualizations
- [ ] Discussion/comments section
- [ ] Print-optimized layouts
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For inquiries about this research study:
- Visit the Contact Us page in the website
- Refer to the Curriculum Vitae and About Authors pages for more information

## Academic Citation

When citing this research, use the format specified in the References section of the study.

---

**Last Updated:** July 2026  
**Version:** 1.1  
**Status:** Completed Research Study
