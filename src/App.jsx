import { useState } from "react";
import "./App.css";

function App() {
	const [calculation, setCalculation] = useState("");
	const [screen, setScreen] = useState("0");

	return (
		<div className="App">
			<div></div>
			<div className="grid grid-cols-4"></div>
			
		</div>
	);
}

export default App;
