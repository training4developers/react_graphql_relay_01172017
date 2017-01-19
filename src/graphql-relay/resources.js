import fetch from 'node-fetch';
import { Viewer, Book } from './models';

export const getViewer = (baseUrl, id) => Object.assign(new Viewer(), { id });

export const getBooks = (baseUrl) =>
    fetch(`${baseUrl}/books`).then(res => res.json())
        .then(booksData => booksData.map(bookData =>
            Object.assign(new Book(), bookData)));

export const getBook = (baseUrl, bookId) =>
    fetch(`${baseUrl}/books/${bookId}`).then(res => res.json())
        .then(bookData => Object.assign(new Book(), bookData));