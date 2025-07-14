import React, { useState } from 'react'

function useCount(initialCount = 0) {
    const [count, setCount] = useState(initialCount);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    const resetHandler = () => {
        setCount(initialCount);
    }

    return {
        count, incrementHandler, decrementHandler, resetHandler
    };
}

export default useCount;
