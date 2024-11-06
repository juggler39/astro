import { counter } from "../store/counterStore";
import { useStore } from "@nanostores/preact";

export default function CounterIsland() {
  const count = useStore(counter);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
