import type { Book } from './Book';

export interface BookCopy {
  id?: number;
  book: Book;
  available: boolean;
  state: string;
}

export type BookCopyPayload = Omit<BookCopy, 'book'> & { bookId: number };
