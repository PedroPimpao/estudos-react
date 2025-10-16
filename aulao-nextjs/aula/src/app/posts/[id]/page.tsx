import { Suspense } from "react"
import { PostProps } from "../page"
import { PostInfo } from "./_components/post"

export default async function DetailPost({params} : {params: Promise<{ id: string }>})
{
    const { id } = await params

    return(
        <>
            <h1>Detalhes do Post {id}</h1>
            <Suspense fallback={<h2>Carregando...</h2>}>
                <PostInfo id={id} />
            </Suspense>
        </>
    )
} 