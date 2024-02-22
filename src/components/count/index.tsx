import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CountContext = createContext<{ count: number }>({ count: 0 });

const Count: React.FC<{}> = React.memo((props) => {
  const { count } = useContext(CountContext);

  console.log("count render...");

  return <div>{count}</div>;
});

export const CountContainer = () => {
  const [count, setCount] = useState(0);
  const timer = useRef<number>();

  console.log("count container render...");

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 3000);

    return () => {
      if (!timer.current) {
        return;
      }

      clearInterval(timer.current);
      timer.current = undefined;
    };
  }, []);

  return (
    <CountContext.Provider value={{ count }}>
      <Count />
    </CountContext.Provider>
  );
};
