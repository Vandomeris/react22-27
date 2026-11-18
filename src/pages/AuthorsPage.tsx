import { useEffect, useState } from "react"
import { api } from "../libs/api"
import { useCart } from "../stores/cartStore"
import type { AuthorType } from "../types"

export default function AuthorsPage() {
    const [authors, setAuthors] = useState<AuthorType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    // const response = await ky.get('https://fakerestapi.azurewebsites.net/api/v1/Authors')


    const {add, items} = useCart()


    async function getAuthors() {
        try {
            const authors = await api.get<AuthorType[]>('/api/v1/Authors').json()
            setAuthors(authors)
        } catch (e) {
            console.log(e)
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAuthors()
    }, [])

    if(error){
        return (
            <div>
                Произошла ошибка
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>Идет заргузка.....</div>
        )
    }

    return (
        <div className="grid grid-cols-6 gap-4 p-4">
            {
                authors.map(author => (
                    <div>
                        <p>{author.firstName}</p>
                        <p>{author.lastName}</p>
                        <p>{author.id * 100}$</p>
                        <button 
                        className="py-2 px-4 bg-orange-400"
                        onClick={() => add(author)}
                        >Купить</button>
                    </div>
                ))
            }
        </div>
    )


}