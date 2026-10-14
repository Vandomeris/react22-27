import { useEffect, useOptimistic, useState } from "react"
import type { Book } from "../types"
import ky from "ky"
export default function Books() {


    const [books, setBooks] = useState<Book[]>([])

    const [isLoading, setIsLoading] = useState(false)

    const [showModal, setShowModal] = useState(false)

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


    async function handleSubmit(e: React.SubmitEvent) {

        e.preventDefault()

        const response = await ky.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            json: {
                title: title,
                description: description,
                pageCount: pages,
                excerpt: excerpt,
                publishDate: publish
            }
        }).json()

        console.log(response)

    }

    async function deleteBook(id: number) {
        setIsLoading(true)
        const response = await ky.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)

        if (response.status === 200) {
            console.log('Элемент успешно удален')

            setBooks(
                books.filter(book => {
                    return book.id !== id
                })
            )

        } else {
            console.log('Произошла ошибка')
        }
        setIsLoading(false)
    }


    const [editingTitle, setEditingTitle] = useState('')
    const [editingDescription, setEditingDescription] = useState('')
    const [editingPages, setEditingPages] = useState(0)
    const [editingExcerpt, setEditingExcerpt] = useState('')
    const [editingDate, setEditingDate] = useState('')
    const [editingId, setEditingId] = useState(0)

    function editBook(book: Book) {
        setShowModal(true)
        setEditingTitle(book.title)
        setEditingDescription(book.description)
        setEditingPages(book.pageCount)
        setEditingExcerpt(book.excerpt)
        setEditingDate(book.publishDate)
        setEditingId(book.id)
    }

    async function submitEditForm(e: React.SubmitEvent) {
        e.preventDefault()
        const response = await ky.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${editingId}`, {
            json: {
                title: editingTitle,
                description: editingDescription,
                pageCount: editingPages,
                excerpt: editingExcerpt,
                publishDate: editingDate
            }
        }).json()

        console.log(response)

        setShowModal(false)
    }

    return (
        <div>

            <div>

                <form className="flex flex-col max-w-1/2 mx-auto gap-y-5" onSubmit={(e) => handleSubmit(e)}>
                    <input value={title} onInput={(e) => setTitle(e.currentTarget.value)} type="text" placeholder="Book Title" />
                    <textarea value={description} onInput={(e) => setDescription(e.currentTarget.value)} placeholder="Book Description"></textarea>
                    <input value={pages} onInput={(e) => setPages(e.currentTarget.value)} type="number" placeholder="Pages" />
                    <textarea value={excerpt} onInput={(e) => setExcerpt(e.currentTarget.value)} placeholder="Book Excerpt"></textarea>
                    <input value={publish} onChange={(e) => setPublish(e.currentTarget.value)} type="datetime-local" />

                    <button>Создать</button>
                </form>

            </div>

            {
                books.map(book => (
                    <div>
                        <p> {book.title} </p>
                        <p> {book.publishDate} </p>
                        <p> {book.pageCount} страниц </p>
                        <button
                            onClick={() => deleteBook(book.id)}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Загрузка....' : "Удалить"}
                        </button>
                        <button onClick={() => editBook(book)}>Редактировать</button>
                    </div>
                ))
            }



            {
                showModal && (
                    <div className="fixed w-full h-full bg-black/40 top-0 left-0 grid place-items-center">
                        <div className="w-full">
                            <div className="w-1/2 mx-auto flex justify-end mb-3">
                                <button onClick={() => setShowModal(false)} className="bg-white px-2">X</button>
                            </div>
                            <form
                                onSubmit={(e) => submitEditForm(e)}
                                className="w-1/2 mx-auto flex flex-col gap-y-5">
                                <input value={editingTitle} onInput={(e) => setEditingTitle(e.currentTarget.value)} className="bg-white" type="text" />
                                <input value={editingDescription} onInput={(e) => setEditingDescription(e.currentTarget.value)} className="bg-white" type="text" />
                                <input value={editingPages} onInput={(e) => setEditingPages(+e.currentTarget.value)} className="bg-white" type="text" />
                                <input value={editingExcerpt} onInput={(e) => setEditingExcerpt(e.currentTarget.value)} className="bg-white" type="text" />
                                <input value={editingDate} onInput={(e) => setEditingDate(e.currentTarget.value)} className="bg-white" type="text" />
                                <button className="bg-white py-2 px-4">Сохранить</button>
                            </form>
                        </div>

                    </div>
                )
            }


        </div>
    )

}