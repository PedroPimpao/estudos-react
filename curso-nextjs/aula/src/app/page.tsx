import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Curso de NextJS',
  description: 'Aprendendo NextJS no zero!'
}

export default function Home(){
  return(
    <div>
      <h1>Página HOME</h1>
    </div>
  )
} 