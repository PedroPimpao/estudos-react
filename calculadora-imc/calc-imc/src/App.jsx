import Calculator from "./pages/calculator";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App(){

    return(
        <ThemeProvider>
            <Calculator/>
        </ThemeProvider>
    )
		
}