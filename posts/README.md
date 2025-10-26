# Post Template Guide

## Quick Start

1. Copy `post-template.html` to create a new post
2. Replace the following placeholders:
   - `POST_TITLE` → Your post title
   - `POST_DATE` → Publication date (e.g., "January 15, 2025")
   - `POST_SUBTITLE` → Brief description or category
3. Write your content in the `<main class="post-content">` section
4. Update the tags in the footer as needed

## Supported HTML Elements

The post styling automatically handles these elements:

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

## Tips

- Keep paragraphs reasonably short for better readability
- Use headings to create clear content hierarchy
- Blockquotes work well for important quotes or callouts
- Code blocks automatically handle overflow on mobile
- Images will automatically scale responsively
- Tags in the footer help with categorization and discovery

## Example Structure

```html
<main class="post-content">
  <p>Opening paragraph that introduces the topic.</p>
  
  <h2>Main Section</h2>
  
  <p>Content with <em>emphasis</em> and <a href="#">links</a>.</p>
  
  <blockquote>
    "Important quote that stands out."
  </blockquote>
  
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
  
  <pre><code>console.log("Code example");</code></pre>
</main>
```

## Responsive Design

The post layout automatically adapts to different screen sizes:
- Desktop: Full width with optimal reading length
- Tablet: Adjusted spacing and typography
- Mobile: Stacked navigation, optimized font sizes

## Accessibility

All interactive elements include proper focus states and keyboard navigation support.
