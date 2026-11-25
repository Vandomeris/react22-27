import ky from "ky";

export function getToken() {
  return localStorage.getItem("token");
}

export const api = ky.create({
  baseUrl: "http://127.0.0.1:8000",
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const token = getToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      ({ response }) => {
        if (response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      },
    ],
  },
});
