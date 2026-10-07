import { useEffect, useState } from "react"
import type { Book } from "../types"
import ky from "ky"
export default function Books() {


    const [books, setBooks] = useState<Book[]>([])


    // async function getBooks() {
    //     const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
    //     const result = await response.json() as Book[]
    //     setBooks(result)
    // }

    async function getBooks() {
        const response = await ky.get<Book[]>('https://fakerestapi.azurewebsites.net/api/v1/Books').json()
        setBooks(response)
    }


    useEffect(
        () => {
            getBooks()
        },
        []
    )


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pages, setPages] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [publish, setPublish] = useState('')


    return (
        <div>

            <div>


                <form>
                    <input value={title} onInput={(e) => setTitle(e.currentTarget.value)} type="text" placeholder="Book Title" />
                    <textarea value={description} placeholder="Book Description"></textarea>
                    <input value={pages} type="number" placeholder="Pages" />
                    <textarea value={excerpt} placeholder="Book Excerpt"></textarea>
                    <input value={publish} type="datetime-local" />

                    <button>Создать</button>
                </form>

            </div>

            {
                books.map(book => (
                    <div>
                        <p> {book.title} </p>
                        <p> {book.publishDate} </p>
                        <p> {book.pageCount} страниц </p>
                    </div>
                ))
            }
        </div>
    )

}