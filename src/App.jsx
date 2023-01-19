import { useState } from "react";
import "./App.css";

function App() {
	const [formula, setFormula] = useState("");
	const [output, setOutput] = useState("0");

	// on click functions
	const clearScreen = () => {
		setOutput("0")
		setFormula("")
	}{}


	return (
		<div className="h-screen bg-blue-300">
			<div className="flex flex-col w-full h-full justify-center items-center gap-1 text-slate-100">
				<div className="bg-gray-900">
					<div className="flex flex-col">
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-lg min-h-[50px]">{formula}</div>
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-2xl">{output}</div>
					</div>
					<div className="grid grid-rows-[auto] grid-template-area gap-1 p-2 bg-gray-900">
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-red-600 ac" onclick={clearScreen}>AC</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 divide" onclick={operator}>/</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 multiply" onclick={operator}>X</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 seven" onclick={number}>7</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 eight " onclick={number}>8</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 nine " onclick={number}>9</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 minus " onclick={operator}>-</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 four " onclick={number}>4</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 five " onclick={number}>5</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 six " onclick={number}>6</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 plus " onclick={operator}>+</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 one" onclick={number}>1</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 two" onclick={number}>2</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 three" onclick={number}>3</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-blue-600 equal" onclick={equal}>=</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 zero" onclick={number}>0</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 point" onclick={point}>.</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
