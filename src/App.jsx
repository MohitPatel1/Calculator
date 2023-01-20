import { useState } from "react";
import "./App.css";

function App() {
	const [formula, setFormula] = useState("");
	const [outputScreen, setOutputScreen] = useState("0");
	const [lastDigit, setLastDigit] = useState("0");

	const numbers = ["0","1","2","3","4","5","6","7","8","9"]
	const operators = ["/","*","-","+"];

	// on click functions
	const clearScreen = () => {
		setOutputScreen("0")
		setFormula("")
		setLastDigit("0")
	}

	const number = (event) => {
		const value = event.target.innerHTML
		if(formula != "0"){
			if(numbers.includes(lastDigit) || operators.includes(lastDigit)){
				if(outputScreen != "0"){
					setOutputScreen(outputScreen + value)
				}else{
					setOutputScreen(value)
				}
				setFormula(formula + value)
				setLastDigit(value)
			}else if(lastDigit == "."){
				setOutputScreen(outputScreen + value)
				setFormula(formula + value)
			}
			else if(lastDigit == "="){
				clearScreen()
				setFormula(value)
				setOutputScreen(value)
			}
		}
	}

	const operator = (event) => {
		const value = event.target.innerHTML
		if(formula != ""){
			setOutputScreen(value)
			console.log(numbers.includes(outputScreen.charAt(value.length-1)))
			console.log(outputScreen)
			console.log(lastDigit == (".") && (numbers.includes(outputScreen.charAt(value.length-1))))
			if(numbers.includes(lastDigit)){
				setFormula(formula + value)
				setLastDigit(value)
			}
			else if(operators.includes(lastDigit)){
				setFormula((formula.slice(0,-1)) + value)
				setLastDigit(value)
			}
			else if(lastDigit == "." && numbers.includes(outputScreen.charAt(value.length-1))){
				setFormula(formula + value)
				setLastDigit(outputScreen.charAt(value.length-1))
			}
			else if(lastDigit == "."){
				setFormula((formula.slice(0,-1)) + value)
				setLastDigit(value)
			}
		}
	}

	const point = () => {
		if(numbers.includes(lastDigit)){
			setOutputScreen(outputScreen + ".")
			setFormula(formula + ".")
		}
		else if(operators.includes(lastDigit)){
			setOutputScreen("0.")
			setFormula(formula + "0.")
		}
		setLastDigit(".")
	}

	const equal = () => {
		const answer = eval(formula).toFixed(2)
		setFormula(formula + " = " + answer)
		setOutputScreen(Number(answer))
		setLastDigit("=")
	}

	return (
		<div className="h-screen bg-blue-300">
			<div className="flex flex-col w-full h-full justify-center items-center gap-1 text-slate-100">
				<div className="bg-gray-900">
					<div className="flex flex-col">
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-lg min-h-[50px]">{formula}</div>
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-2xl" id="display">{outputScreen}</div>
					</div>
					<div className="grid grid-rows-[auto] grid-template-area gap-1 p-2 bg-gray-900">
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-red-600 ac" id="clear" onClick={clearScreen}>AC</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 divide" id="divide" onClick={operator}>/</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 multiply" id="multiply" onClick={operator}>*</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 seven" id="seven" onClick={number}>7</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 eight " id="eight" onClick={number}>8</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 nine " id="nine" onClick={number}>9</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 minus " id="subtract" onClick={operator}>-</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 four " id="four" onClick={number}>4</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 five " id="five" onClick={number}>5</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 six " id="six" onClick={number}>6</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 plus " id="add" onClick={operator}>+</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 one" id="one" onClick={number}>1</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 two" id="two" onClick={number}>2</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 three" id="three" onClick={number}>3</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-blue-600 equal" id="equals" onClick={equal}>=</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 zero" id="zero" onClick={number}>0</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 point" id="decimal" onClick={point}>.</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
