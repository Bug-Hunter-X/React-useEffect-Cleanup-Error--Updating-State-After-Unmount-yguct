# React useEffect Cleanup Error

This repository demonstrates a common error in React applications involving the `useEffect` hook and its cleanup function. The issue arises when the cleanup function attempts to modify state after the component has unmounted. This leads to errors such as `Cannot update a component after it has been unmounted`.  This example specifically illustrates the problem of attempting to update state within the cleanup function of an effect that only runs once on mount. The solution shows how to correctly handle this scenario by checking if the component is still mounted before attempting to update state.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console for error messages when the component is unmounted. This can be done through a direct route change or by re-rendering using any mechanism. 

## Solution

The solution involves checking if the component is still mounted before updating state. This is done by using a flag that tracks the mounted state of the component.