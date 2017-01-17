import fetch from 'node-fetch';
import {
    GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLFloat, GraphQLList
} from 'graphql';

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
        }
    })

});

export const schema = new GraphQLSchema({ query });

