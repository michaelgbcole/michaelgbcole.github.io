# Project Template Guide

## Quick Start

1. Copy `project-template.html` to create a new project page
2. Replace the following placeholders:
   - `PROJECT_TITLE` → Your project name
   - `PROJECT_DATE` → Project date (e.g., "January 15, 2025")
   - `PROJECT_CATEGORY` → Brief category or description
   - `PROJECT_NAME` → Folder name for media assets
3. Write your content in the `<main class="post-content">` section
4. Update the tags in the footer as needed

## Project Page Structure

### Header Section
- **Navigation**: Links back to main site sections
- **Title**: Project name with consistent typography
- **Meta**: Date and category information

### Content Section
- **Hero Image**: Main project screenshot or overview
- **Problem Statement**: What problem does this solve?
- **Solution**: How did you approach it?
- **Technical Details**: Implementation specifics
- **Results**: Outcomes and learnings

### Footer Section
- **Back Link**: Return to projects overview
- **Tags**: Categorization and discovery

## Supported HTML Elements

The same rich formatting options are available as in posts:

### Text Elements
- `<p>` - Paragraphs with proper spacing
- `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - Hierarchical headings
- `<em>` - *Italic emphasis*
- `<strong>` - **Bold emphasis**

### Lists
- `<ul>` and `<li>` - Unordered lists with proper indentation
- `<ol>` and `<li>` - Ordered lists

### Quotes and Code
- `<blockquote>` - Styled quotes with left border
- `<code>` - Inline code with background highlight
- `<pre><code>` - Code blocks with syntax highlighting background

### Media and Links
- `<img>` - Responsive images with rounded corners
- `<a>` - Links with hover effects and underline
- `<hr>` - Horizontal rules for section separation

## Tips for Project Pages

### Content Organization
- Start with a clear problem statement
- Explain your approach and reasoning
- Include technical details that matter
- Show results and learnings
- Link to live demos or repositories

### Visual Elements
- Use a compelling hero image
- Include screenshots or diagrams
- Show code snippets when relevant
- Demonstrate the project in action

### Writing Style
- Be specific about what you built
- Explain technical decisions and trade-offs
- Include challenges you overcame
- Highlight what you learned

## Example Structure

```html
<main class="post-content">
  <img src="../media/my-project/hero.png" alt="Project overview" />
  
  <p>Project introduction and overview.</p>
  
  <h2>The Problem</h2>
  <p>What problem does this solve?</p>
  
  <h2>My Approach</h2>
  <p>How I decided to tackle it.</p>
  
  <blockquote>
    "Key insight or quote from the project."
  </blockquote>
  
  <h2>Technical Implementation</h2>
  <ul>
    <li>Technology stack</li>
    <li>Key features</li>
    <li>Architecture decisions</li>
  </ul>
  
  <pre><code>// Code example
const result = await myFunction();</code></pre>
  
  <h2>Results</h2>
  <p>What I learned and accomplished.</p>
</main>
```

## Responsive Design

Project pages automatically adapt to different screen sizes:
- Desktop: Full width with optimal reading length
- Tablet: Adjusted spacing and typography
- Mobile: Stacked navigation, optimized font sizes

## Accessibility

All interactive elements include proper focus states and keyboard navigation support, maintaining consistency with the rest of your site.
