import ky from "ky";

export const api = ky.create({
    baseUrl: 'http://127.0.0.1:8000',
})