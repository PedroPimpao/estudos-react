// import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'
import { SignedUsers } from './pages/UsersRegistered/UsersRegistered'

export default function App() {

	return (
		<>
			<ThemeProvider>
				<UserProvider>

					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Login/>}/>
							<Route path='/signup' element={<SignUp/>}/>
							<Route path='/signedusers' element={<SignedUsers/>}/>
						</Routes>
					</BrowserRouter>
					
				</UserProvider>
			</ThemeProvider>
		</>
	)
}


