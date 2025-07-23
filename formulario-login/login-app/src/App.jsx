import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'

export default function App() {


	return (
		<>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login/>}/>
						<Route path='/signup' element={<SignUp/>}/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</>
	)
}


