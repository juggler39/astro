import { counter } from "../store/counterStore";
import { useStore } from "@nanostores/preact";

export default function Counter() {
  const count = useStore(counter);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => counter.set(count + 1)}>click me</button>
    </div>
  );
}
