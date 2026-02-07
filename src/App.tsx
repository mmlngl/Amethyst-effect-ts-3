import { Atom, useAtomValue, useAtomSet } from "@effect-atom/atom-react";
import { useCallback } from "react";

const countAtom = Atom.make(0).pipe(Atom.keepAlive);

const useIncrement = () => {
	const set = useAtomSet(countAtom);
	return useCallback(() => set((prev) => prev + 1), [set]);
};

const useDecrement = () => {
	const set = useAtomSet(countAtom);
	return useCallback(() => set((prev) => prev - 1), [set]);
};

function App() {
	const count = useAtomValue(countAtom);
	const increment = useIncrement();
	const decrement = useDecrement();
	return (
		<p>
			<span data-testid="count">{count}</span>
			<button type="button" onClick={increment}>
				+
			</button>
			<button type="button" onClick={decrement}>
				-
			</button>
		</p>
	);
}

export default App;
