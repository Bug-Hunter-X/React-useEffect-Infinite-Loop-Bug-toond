# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the dependency array. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The initial implementation attempts to increment the `count` state variable within the `useEffect` callback. This creates a loop because every time `count` changes, the `useEffect` function is called again, leading to continuous state updates.

## Solution

The corrected version in `bugSolution.js` uses functional updates to prevent this infinite loop. The functional update pattern ensures that the state update is based on the previous value of the state, thus avoiding the infinite loop scenario.  The dependency array only includes values that are externally modified and do not cause circular updates.