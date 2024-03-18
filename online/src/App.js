import "./styles/main.css"

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/header";
import Exams from "./components/pages/Exams";

function App() {
	return (
		<div className="App">

			<SideBar></SideBar>
			<Header></Header>

			<Exams></Exams>


		</div>
	);
}

export default App;
