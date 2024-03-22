# Next.js App Style Guide and Conventions

## Table of Contents

- [Component Declaration](#component-declaration)
- [Hooks](#hooks)
- [Handlers](#handlers)
- [Variables](#variables)
- [File and Folder Structure](#file-and-folder-structure)
- [Styling](#styling)
- [Import Order](#import-order)
- [Testing](#testing)

## Component Declaration

### Functional Components

- Use arrow functions for component declarations.
- Always name the component the same as the file.
- Place the component export at the bottom of the file.

```jsx
// Good
const MyComponent = () => {
  return <div>Hello, Next.js!</div>;
};

export default MyComponent;
```

## PropTypes and DefaultProps

### Define PropTypes for all components.

- Use default props for optional props.

```tsx
import PropTypes from 'prop-types';

const MyComponent = ({ title }) => {
  return <h1>{title}</h1>;
};

MyComponent.propTypes = {
  title: PropTypes.string,
};

MyComponent.defaultProps = {
  title: 'Default Title',
};

export default MyComponent;
```

## Hooks

### Prefix custom hooks with use.

- Encapsulate logic within hooks to keep components clean.

```tsx
// useFetch.js
import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};

export default useFetch;
```

## Handlers

- Prefix handler functions with handle.
- Define handlers as close to their usage as possible within the component.

```tsx
const MyComponent = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

<!-- import the rest below -->

## Import Order

- Group and order imports as follows: React-related, third-party libraries,
  utilities/hooks, component imports, styles.
- Separate each group by a blank line.

```tsx
import React from 'react';
import PropTypes from 'prop-types';

import { useFetch } from '../../hooks';

import MyComponent from '../MyComponent';

import styles from './AnotherComponent.module.css';
```
