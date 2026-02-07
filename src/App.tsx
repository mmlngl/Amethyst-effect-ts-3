import { Atom } from "@effect-atom/atom";
import { useAtom, RegistryProvider } from "@effect-atom/atom-react";

const counterAtom = Atom.make(0);

function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Counter: {count}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <RegistryProvider>
      <Counter />
    </RegistryProvider>
  );
}

export default App;