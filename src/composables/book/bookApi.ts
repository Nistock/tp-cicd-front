import api from '@/api';
import type { Book, BookPayload } from '@/model/Book';

export const bookApi = {
  getAllBooks() {
    return api.get<Book[]>('/books');
  },
  getBookById(id: number) {
    return api.get<Book>(`/books/${id}`);
  },
  createBook(payload: BookPayload) {
    return api.post<Book>('/books', payload);
  },
  updateBook(id: number, payload: BookPayload) {
    return api.patch<Book>(`/books/${id}`, payload);
  },
  deleteBook(id: number) {
    return api.delete(`/books/${id}`);
  },
};
