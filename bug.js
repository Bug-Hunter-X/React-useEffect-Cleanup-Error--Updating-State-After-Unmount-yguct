```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Component mounted');
    // Incorrect return function
    return () => {
      console.log('Component unmounting...'); 
      // This is incorrect. It will throw an error if the component is unmounted.
      setCount(10); 
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```