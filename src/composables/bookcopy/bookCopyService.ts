import { ref } from 'vue';
import { bookCopyApi } from './bookCopyApi';
import type { BookCopy, BookCopyPayload } from '@/model/BookCopy';

const bookCopys = ref<BookCopy[]>([]);

export function useBookCopyService() {
  const getAllBookCopies = async () => {
    const res = await bookCopyApi.getAllBookCopies();
    bookCopys.value = res.data;
  };
  const getBookCopyById = async (id: number) => {
    const res = await bookCopyApi.getBookCopyById(id);
    return res.data;
  };
  const createBookCopy = async (payload: BookCopyPayload) => {
    await bookCopyApi.createBookCopy(payload);
    await getAllBookCopies();
  };
  const updateBookCopy = async (id: number, payload: BookCopyPayload) => {
    await bookCopyApi.updateBookCopy(id, payload);
    await getAllBookCopies();
  };
  const deleteBookCopy = async (id: number) => {
    await bookCopyApi.deleteBookCopy(id);
    await getAllBookCopies();
  };

  return {
    bookCopys,
    getAllBookCopies,
    getBookCopyById,
    createBookCopy,
    updateBookCopy,
    deleteBookCopy,
  };
}
