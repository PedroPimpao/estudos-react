import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { Form } from './pages/Form'
import { Result } from './pages/Result'
import './App.css'

export default function App() {
	
	
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Form />}/>
					<Route path="/result" element={<Result />}/>
				</Routes>
			</BrowserRouter>
		</UserProvider>
	)
}

