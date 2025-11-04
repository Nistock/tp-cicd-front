import api from '@/api';
import type { BookCopy, BookCopyPayload } from '@/model/BookCopy';

export const bookCopyApi = {
  getAllBookCopies() {
    return api.get<BookCopy[]>('/bookcopies');
  },
  getBookCopyById(id: number) {
    return api.get<BookCopy>(`/bookcopies/${id}`);
  },
  createBookCopy(payload: BookCopyPayload) {
    return api.post<BookCopy>('/bookcopies', payload);
  },
  updateBookCopy(id: number, payload: BookCopyPayload) {
    return api.patch<BookCopy>(`/bookcopies/${id}`, payload);
  },
  deleteBookCopy(id: number) {
    return api.delete(`/bookcopies/${id}`);
  },
};
