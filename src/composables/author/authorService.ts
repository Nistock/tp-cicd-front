import { ref } from 'vue';
import { authorApi } from './authorApi';
import type { Author } from '@/model/Author';

const authors = ref<Author[]>([]);

export function useAuthorService() {
  const getAllAuthors = async () => {
    const res = await authorApi.getAllAuthors();
    authors.value = res.data;
  };

  const getAuthorById = async (id: number) => {
    const res = await authorApi.getAuthorById(id);
    return res.data;
  };

  const createAuthor = async (payload: Author) => {
    await authorApi.createAuthor(payload);
    await getAllAuthors();
  };

  const updateAuthor = async (id: number, payload: Author) => {
    await authorApi.updateAuthor(id, payload);
    await getAllAuthors();
  };

  const deleteAuthor = async (id: number) => {
    await authorApi.deleteAuthor(id);
    await getAllAuthors();
  };

  return {
    authors,
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  };
}
