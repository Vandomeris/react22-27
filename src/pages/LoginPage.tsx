import { useState } from "react"
import { api } from "../libs/api"
import type { LoginResponse } from "../types"
import { useNavigate } from "react-router"

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function login(e: React.SubmitEvent) {
        e.preventDefault()
        try {
            const resp = await api.post<LoginResponse>('/auth/login', {
                json: {
                    username: username,
                    password: password
                }
            }).json()
            localStorage.setItem('token', resp.access_token)
            navigate('/')
        }catch(e){
            console.log(e)
        }
       
    }

    return (
        <div>
            <form onSubmit={(e) => login(e)}
                className="flex flex-col gap-y-3 max-w-1/2 mx-auto">
                <input value={username} onInput={(e) => setUsername(e.currentTarget.value)} type="text" />
                <input value={password} onInput={(e) => setPassword(e.currentTarget.value)} type="password" />
                <button>Войти</button>
            </form>
        </div>
    )
}