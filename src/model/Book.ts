import type { Author } from './Author';

export interface Book {
  id?: number;
  title: string;
  author: Author;
  publishYear: string;
  isbn: string;
}

export type BookPayload = Omit<Book, 'author'> & { authorId: number };
