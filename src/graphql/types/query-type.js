import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';

import { bookType } from './book-type';
import { authorType } from './author-type';

export const query = new GraphQLObjectType({

    name: 'Query',
    description: 'Our query type',
    fields: () => ({
        message: {
            type: GraphQLString,
            description: 'Our message of the day!',
            resolve: () => 'Have wonderful day!'
        },
        books: {
            type: new GraphQLList(bookType),
            description: 'A list of books',
            resolve: (_1, _2, { baseUrl }) =>
                fetch(`${baseUrl}/books`)
                    .then(res => res.json())
        },
        book: {
            type: bookType,
            description: 'Get a single book',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'The id of the book I want'
                }
            },
            resolve: (_, { id: bookId }, { baseUrl }) =>
                fetch(`${baseUrl}/books/${bookId}`)
                    .then(res => res.json())
        },
        authors: {
            type: new GraphQLList(authorType),
            description: 'A list of authors',
            resolve: (_1, _2, { baseUrl }) =>
                fetch(`${baseUrl}/authors`)
                    .then(res => res.json())
        },
        author: {
            type: authorType,
            description: 'Get a single author',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'The id of the author I want'
                }
            },
            resolve: (_, { id: authorId }, { baseUrl }) =>
                fetch(`${baseUrl}/authors/${authorId}`)
                    .then(res => res.json())
        },        
    })

});