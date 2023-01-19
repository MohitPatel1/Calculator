import { useState } from "react";
import "./App.css";

function App() {
	const [formula, setFormula] = useState("");
	const [output, setOutput] = useState("0");
	const [lastDigit, setLastDigit] = useState("");
	const [calculation, setCalculation] = useState("");
	const [answer, setAnswer] = useState("");

	const operators = ["/","*","-","+"];
	// console.log(formula)
	// console.log(output)
	
	// on click functions
	const clearScreen = () => {
		setOutput("0")
		setFormula("")
	}

	const number = (event) => {
		const value = event.target.innerHTML
		setOutput(value)
		setFormula(formula + value)
		setLastDigit(value)
	}

	const operator = (event) => {
		const value = event.target.innerHTML
		// console.log((formula - output))
		
		if(!operators.includes(lastDigit)){
			console.log("in if")
			setOutput(value)
			setFormula(formula + value)
			setCalculation(formula + value)
			setLastDigit(value)
		}
		else{
			console.log("in else")
			setOutput(value)
			setFormula((formula.slice(0,-1)) + value)
		}
	}

	const point = (event) => {

	}

	const equal = (event) => {

	}

	return (
		<div className="h-screen bg-blue-300">
			<div className="flex flex-col w-full h-full justify-center items-center gap-1 text-slate-100">
				<div className="bg-gray-900">
					<div className="flex flex-col">
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-lg min-h-[50px]">{formula}</div>
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-2xl">{output}</div>
					</div>
					<div className="grid grid-rows-[auto] grid-template-area gap-1 p-2 bg-gray-900">
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-red-600 ac" onClick={clearScreen}>AC</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 divide" onClick={operator}>/</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 multiply" onClick={operator}>*</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 seven" onClick={number}>7</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 eight " onClick={number}>8</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 nine " onClick={number}>9</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 minus " onClick={operator}>-</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 four " onClick={number}>4</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 five " onClick={number}>5</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 six " onClick={number}>6</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 plus " onClick={operator}>+</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 one" onClick={number}>1</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 two" onClick={number}>2</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 three" onClick={number}>3</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-blue-600 equal" onClick={equal}>=</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 zero" onClick={number}>0</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 point" onClick={point}>.</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
