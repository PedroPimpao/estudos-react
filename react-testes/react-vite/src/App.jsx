import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes ,Route } from "react-router-dom"

export default function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/home" element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	)
}

