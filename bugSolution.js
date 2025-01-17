```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Component mounted');
    return () => {
      mounted.current = false; // Set mounted to false before cleanup
      console.log('Component unmounting...'); 
    };
  }, []);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      if (mounted.current) {
        setCount(10);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```