import React, { useEffect, useState } from "react";

const CountUp = ({ end, start = 0, speed = 50 }) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < end) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [end, start, speed]);

  return <h4 className="count-up">{count}%</h4>;
};

export default CountUp;
