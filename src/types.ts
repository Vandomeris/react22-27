export interface Book {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
}

export interface Phone {
  id: string;
  brand: string;
  model: string;
  storage: string;
  color: string;
  price: number;
  inStock: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AuthUser {
  id: number;
  username: string;
  is_admin: boolean;
}

export interface AuthorType {
  id: number;
  idBook: number;
  firstName: string;
  lastName: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}
