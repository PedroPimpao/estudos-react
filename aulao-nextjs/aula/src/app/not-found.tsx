import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'A pagina não existe',
}
export default function NotFoundPage(){
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl"> Página 404 não encontrada </h1>
            <p>Essa página que você tentou acessar não existe!</p>

            <Link href='/'>
                Voltar para a Home
            </Link>
        </div>
    )
}