import fetch from 'node-fetch';
import {
    GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLFloat, GraphQLList
} from 'graphql';

export const authorType = new GraphQLObjectType({

    name: 'Author',
    description: 'An author type',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Id of author'
        },
        firstName: {
            type: GraphQLString,
            description: 'First name  of the author'
        },
        lastName: {
            type: GraphQLString,
            description: 'Las name  of the author'
        }
    })

});

export const bookType = new GraphQLObjectType({

    name: 'Book',
    description: 'A book type',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Id of book'
        },
        title: {
            type: GraphQLString,
            description: 'Title of the book'
        },
        category: {
            type: GraphQLString,
            description: 'Category of the book'
        },
        price: {
            type: GraphQLFloat,
            description: 'Price of the book'
        },
        author: {
            type: authorType,
            description: 'Author of the book',
            resolve: ({ authorId }, _, { baseUrl }) =>
                fetch(`${baseUrl}/authors/${authorId}`)
                    .then(res => res.json())
        }
    })
});

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
            resolve: () =>
                fetch('http://localhost:3010/books')
                    .then(res => res.json())
        },
        authors: {
            type: new GraphQLList(authorType),
            description: 'A list of authors',
            resolve: () =>
                fetch('http://localhost:3010/authors')
                    .then(res => res.json())
        }
    })

});

export const schema = new GraphQLSchema({ query });

