import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/Welcome";
import { LoginPage } from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
