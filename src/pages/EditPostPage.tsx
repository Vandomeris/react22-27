import ky from "ky"
import { useCallback, useEffect, useState } from "react"
import type { Post } from "../types"

export default function EditPostPage() {

    const [posts, setPosts] = useState<Post[]>([])
    const [signlePost, setSinglePost] = useState<Post | null>(null)
    const [selectedPostId, setSelectedPostId] = useState(1)
    const [theme, setTheme] = useState('dark')
    async function getPosts() {
        const response = await ky.get<Post[]>('https://jsonplaceholder.typicode.com/posts').json()
        setPosts(response)
    }

    useEffect(
        () => {
            getPosts()
        },
        []
    )


    const getSinglePost = useCallback(
        async () => {
            const response = await ky.get<Post>(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}`).json()
            setSinglePost(response)
        },
        [selectedPostId]
    )

    useEffect(() => {
        getSinglePost()
    }, [getSinglePost])

    return (
        <div>
            <div>
                <p>Вы выбрали пост {selectedPostId} для редактирования</p>
                <select value={selectedPostId} onChange={(e) => setSelectedPostId(e.currentTarget.value)} className="w-1/2 mx-auto block border border-red-500">
                    {
                        posts.map(post => (
                            <option value={post.id}>ID - {post.id} - {post.title}</option>
                        ))
                    }
                </select>
            </div>

            <form className="flex flex-col gap-y-2 max-w-1/2 mx-auto">
                <input defaultValue={signlePost?.title ?? ""} className="border border-red-500" type="text" />
                <textarea defaultValue={signlePost?.body ?? ""} className="border border-red-500" name="" id=""></textarea>
                <button>Edit</button>
            </form>


        </div>
    )
}