import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Home | Meu Site",
	description: "Página inicial",
}

export default function Home(){
	return <h1>Home Page</h1>
}