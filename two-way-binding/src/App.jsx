import React, { useState } from "react";

function App() {
	let [name, setName] = useState("");
  
const submitHandler =function (e) {
	e.preventDefault();
	setName("");
}


	return (
		<>
			<form
				className="flex gap-2 justify-center items-center w-screen"
				onSubmit={(e) => submitHandler(e)}
			>
				<input
					className="py-3 rounded-md text-center"
					type="text"
					placeholder="Enter Name"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<button>Submit</button>
			</form>
		</>
	);
}
export default App;
