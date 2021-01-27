# HTML CSS

## Block vs Inline

- All HTML are by default block or inline
- Block elements 
  - Force a line break after element
  - Take up full width of parent by default
  - <div> is the canonical block element
- Inline elements
  - Allow other elements to sit on left/right (on the same line)
  - Cannot set width and height
  - <span> is the canonical inline element

```HTML
<section>
  <div>Apple</div>
  <div>Banana</div>
</section>
<section>
  <span>Cherry</span>
  <span>Kiwi</span>
  <span>Strawberry</span>
</section>
```
|---------------------------------------------|
| |-----------------------------------------| |
| | |-------------------------------------| | |
| | | Apple                               | | |
| | |-------------------------------------| | |
| | |-------------------------------------| | |
| | | Banana                              | | |
| | |-------------------------------------| | |
| |-----------------------------------------| |
| |-----------------------------------------| |
| | |--------| |------| |------------|      | |
| | | Cherry | | Kiwi | | Strawberry |      | |
| | |--------| |------| |------------|      | |
| |-----------------------------------------| |
|---------------------------------------------|

## Semantic HTML

- Semantic: relating to meaning in language or logic.
- More than simply defining the structure, HTML should connote the meaning of page components
  - What is the content?
  - What role does the content serve?
  - How is the content related to the page/other content?
- Tags are used by the browser pare semantic meaning.

If possible so tags that provide more semantic insight:
```HTML
<article> <section> <header> <footer> <nav> <cite> <blockquote> <strong> <em> <mark>
<h1> <h6> <p> <ol> <ul> <li>
```

- Potentially useful for SEO
- Increase the accessibility of our sites to users with assistive devices
- More tag names provide additional hooks for CSS styling, (potentially reducing the need for classes).

- Augment the accessibility benefits that semantic HTML provides by additionally using an accessibility standard (e.g. ARIA)
- Avoid using semantic tags for styling purposes if the meaning does not match.
  - ex. Don't use a header tag just to make a paragraph stand out.

## CSS: Cascading Style Sheets

- Defines the **appearance** of websites.

- 
- IDs trump class styling.
- Targeting tag and class trumps selecting class.
- Class trumps tag styling.

```CSS
span {
  color: black
}
.colored {
  color: red;
}
span .colored {
  color: orange;
}
#cool {
  color: brown;
}
span #cool {
  color: yellow;
}
```

You can use:
```CSS
#cool {
  color: brown !important; /* This rule will override */
}
#cool {
  color: yellow;
}
```

More specific styling takes precedent.

## Responsive Design

- Modern development is for multiple browsers and devices - page requirements vary
- Some different rules for different screen sizes & orientations, but focus on maintaining DRY in CSS
- Mobile-First (or "Progressive Enhancement") means developing fully featured mobile-friendly sites and **only then** expanding to tablet/desktop scale.

## Tools of responsive Web Design

There a few ways can vary display;
- Avoid sizing in terms of pixels, use proportion based styling (percentages, em, etc.)
- CSS properties like min-width and max-height
- CSS tools like flexbox and CSS grid, or css libraries like Bootstrap
- @media queries - different styles for different screens.

```CSS
@media screen and (max-width: 568px) {
  .selector {
    /* rules */
  }
}

@media screen and (min-width: 700px) and (max-width: 1000px) {
  .selector {
    /* rules */
  }
}
```

## Sass

- Variables in Sass begins with a $ sign.
- In addition to font-size, color is a good use case for variables; variable names are much more readable than hex or rgb.

```css
$font-size = 16px;

.someClass {
  font-size: $font-size
}
```

- Nesting
- CSS lacks visual hierarchy while working with child selectors
- Nesting can provide a visual hierarchy and makes stylesheets more readable

```css

ul {
  div {
    span {

    }
  }
}
```

- Color functions
  
```css
darken($color, 20%)
```

## Visual Hierarchy

- One of the core techniques which are applied to the design process.
- Strives at presenting the content users could **comprehend the level of importance** for each element.
- It organizes the UI.

e.g.

- Using font-size, weight, darkness of text.
- Button color

## Summary

- Flexbox is good for 1D alignment of items
- Grid is good for 2D alignment of items

### Questions


