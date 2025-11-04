import { ref } from 'vue';
import { bookApi } from './bookApi';
import type { Book, BookPayload } from '@/model/Book';

const books = ref<Book[]>([]);

export function useBookService() {
  const getAllBooks = async () => {
    const res = await bookApi.getAllBooks();
    books.value = res.data;
  };
  const getBookById = async (id: number) => {
    const res = await bookApi.getBookById(id);
    return res.data;
  };
  const createBook = async (payload: BookPayload) => {
    await bookApi.createBook(payload);
    await getAllBooks();
  };
  const updateBook = async (id: number, payload: BookPayload) => {
    await bookApi.updateBook(id, payload);
    await getAllBooks();
  };
  const deleteBook = async (id: number) => {
    await bookApi.deleteBook(id);
    await getAllBooks();
  };

  return { books, getAllBooks, getBookById, createBook, updateBook, deleteBook };
}
