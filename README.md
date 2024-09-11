# noshmaster

noshmaster is a prefabricated, modular animation package

## Installation

First, make sure you have `framer-motion` installed:

```bash
npm install framer-motion
```
# `fade-in`
### Installation
```bash
npx noshmaster@latest add fade-in
```

You can use the `FadeIn` component to animate child elements based on their visibility on the screen.

### Example

```jsx
import FadeIn from '@/animation/FadeIn';

const App = () => (
  <div>
    <FadeIn from="bottom" duration={1.5}>
      <h1>Hello World</h1>
    </FadeIn>
  </div>
);

export default App;
````
## Props

The `FadeIn` component accepts the following props:

### `children`

- **Type**: `React.ReactNode`
- **Description**: The content that you want to animate. This can be any valid React node, such as text, elements, or components.

### `from`

- **Type**: `'top' | 'bottom' | 'left' | 'right'`
- **Default**: `undefined`
- **Description**: Determines the direction from which the component will animate in. Possible values are:
  - `'top'` - The component will animate from the top.
  - `'bottom'` - The component will animate from the bottom.
  - `'left'` - The component will animate from the left.
  - `'right'` - The component will animate from the right.

### `opacity`

- **Type**: `boolean`
- **Default**: `true`
- **Description**: If `true`, the component will fade in by changing its opacity from 0 to 1. If `false`, only position animations will occur without opacity changes.

### `duration`

- **Type**: `number`
- **Default**: `1`
- **Description**: Specifies the duration of the animation in seconds. This duration applies to both the position and opacity transitions.


# `PerspectiveEffect`
### Installation

```bash
npx noshmaster@latest add perspective
```

The `PerspectiveEffect` component adds a dynamic perspective effect to its children based on the scroll position of the page. This effect combines scaling and rotation to create a 3D-like transformation as the user scrolls.

## Usage

You can use the `PerspectiveEffect` component to apply a 3D perspective transformation to its child elements based on the scroll position.

### Example

```jsx
import PerspectiveEffect from '@/animation/PerspectiveEffect';

const App = () => (
  <div style={{ height: '200vh' }}> {/* Ensure enough scroll space */}
    <PerspectiveEffect>
      <h1>Scroll to see the effect</h1>
    </PerspectiveEffect>
  </div>
);

export default App;
````

If you have any questions, please contact me here `https://x.com/noshmaster` or here `