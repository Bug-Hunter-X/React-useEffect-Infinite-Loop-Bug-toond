```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Functional update prevents infinite loop
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array ensures execution only once after mount

  return <div>Count: {count}</div>;
}
```