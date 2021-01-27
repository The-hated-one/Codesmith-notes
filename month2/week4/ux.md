# UX

## Design Principles

### Visual Hierarchies

- Size
- Color
- Position

Top of the hierarchy is **larger**,  **bright** and **aligned to the top-left**.

### Groups

Gestalt laws of grouping:
- Humans naturally perceive objects in organized patterns and groups according to proximity and similarity.

## Skeuomorphism vs. Flat Design

- Skeuomorphism is the concept of mimicking physical objects and their properties in a digital space.
  - More 3D, garbage can sounds.

- Flat design became more popular as technology became more familiar.
  - It is more symbolic.

## Almost Flat Design

Flat design streamlines UI and makes sure the user only sees relevant features.

## International Design Considerations

It is not the same worldwide! We naturally think quite myopically.

## Accessibility

Some people require assistive technology to use and navigate the internet, or have visual or physical impairments that make everyday tasks a little harder.

## Intuitive Design Do's and Don't

1. Use variety and contrast between size, color and position to create visual hierarchy.
2. Group related information in similarly styled components. Create a simple, cohesive design system using a few primary colors and 1-2 fonts.
3. Use almost flat design to indicate interactivity with visual feedback - animations on hover/click.

...

## Design with CSS

### CSS Box Model

Block elements by default do not allow elements beside them.
Inline elements e.g. `<span></span>` do.

```CSS
.class {
  width: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 10px
  box-sizing: border-box; /* This means the width of the box will be 100px including margin and padding and border */
}
```

## GRID

```CSS
div {
  display: grid;
  width: 100px;
  height: 100px;
  grid-template-columns: 25px 25px 1fr;
  grid-template-rows: 25px 25px 1fr;
}
div {
  display: grid;
  width: 100px;
  height: 100px;
  grid-template: 25px 25px 1fr / 25px 25px 1fr
}
div {
  display: grid;
  width: 100px;
  height: 100px;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr)
}
```

## CSS Flexbox

- 1D layout controls
- Super responsive


## How to center a div

```CSS
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## The Code

```CSS
h1:hover:after {
  content: ' - this will be appended after the previous content on hove';
}
```

### SASS

```CSS
button { 
  opacity: 1;
  transition: opacity 0.5s ease-in; /* This will cause the opacity change to ease in over 0.5 seconds*/

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
}

thing {
  @extend .charCard /* Extends the properties of the charCard class */
}
```

## Demo Recap (grid)

```CSS
.charContainer {
  display: grid;
  grid-template: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px; /* Adds a gap between the grid items */
}
```

## Frameworks

Chakra
Material-UI
Bootstrap


### Questions

Scss/ vs sass -> 
