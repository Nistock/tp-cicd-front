import api from '@/api';
import type { Author } from '@/model/Author';

export const authorApi = {
  getAllAuthors() {
    return api.get<Author[]>('/authors');
  },
  getAuthorById(id: number) {
    return api.get<Author>(`/authors/${id}`);
  },
  createAuthor(payload: Author) {
    return api.post<Author>('/authors', payload);
  },
  updateAuthor(id: number, payload: Author) {
    return api.patch<Author>(`/authors/${id}`, payload);
  },
  deleteAuthor(id: number) {
    return api.delete(`/authors/${id}`);
  },
};
