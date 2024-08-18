## How can you implement shared functionality across a component tree?
Shared functionality across a component tree can be implemented using several approaches:

Context API: The Context API allows us to share state and functionality globally across components without passing props manually at every level.

Redux: Redux is a state management library that can manage complex state logic and share state or functionality across components in a more predictable and scalable way.

Props: We can pass shared functionality down the component tree via props, but this approach may become cumbersome with deeply nested components.

Higher-Order Components : HOCs are functions that take a component and return a new component with additional props or logic, allowing us to share functionality across multiple components.

## Why is the useState hook appropriate for handling state in a complex component?
The useState hook is ideal for handling state in complex components because it:

Simplifies state management in functional components.
Supports multiple state variables easily.
Triggers re-renders automatically on state changes.
Works well with the functional component structure.