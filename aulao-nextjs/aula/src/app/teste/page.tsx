'use client'

import { useEffect, useState } from "react"

export default function TestPage(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])

    return(
        <>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os Posts</h1>
            <button onClick={()=>{
                alert("Teste")
            }}>
                TESTE
            </button>
            <div className="flex flex-col gap-4 mx-2">
                {posts.map((post: any)=>(
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <p><strong>User ID:</strong> {post.userId}</p>
                    </div>
                ))}
            </div>
        </>
    )
}