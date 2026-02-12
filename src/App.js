import { useState } from 'react';

function Clock() {
    const [increment, setIncrement] = useState(1);
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setIncrement((i) => i + 1);
    }
    function handleDecrement() {
        setIncrement((i) => i - 1);
    }
    function handleCountIncrement() {
        setCount((j) => j + increment);
    }
    function handleCountDecrement() {
        setCount((j) => j - increment);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);
    const newDate = date.toDateString();
    return (
        <div className="clock">
            <div className="row">
                <button className="btn" onClick={handleDecrement}>
                    -
                </button>
                <p>Increment: {increment}</p>
                <button className="btn" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="row">
                <button className="btn" onClick={handleCountDecrement}>
                    -
                </button>
                <p>Count: {count}</p>
                <button className="btn" onClick={handleCountIncrement}>
                    +
                </button>
            </div>

            <p>
                <span>
                    {count === 0
                        ? 'Today is '
                        : count > 0
                          ? `${count} days from today will be `
                          : `${Math.abs(count)} day(s) ago was `}
                </span>
                {newDate}
            </p>
        </div>
    );
}

export default Clock;
