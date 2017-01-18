import fetch from 'node-fetch';
import {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLList
} from 'graphql';

import { bookType } from './book-type';

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
        },
        fullName: {
            type: GraphQLString,
            description: 'Full name of the author',
            resolve: ({ firstName, lastName }) => firstName + ' ' + lastName
        },
        books: {
            type: new GraphQLList(bookType),
            description: 'Books from the author',
            resolve: ({ id: authorId }, _, { baseUrl}) =>
                fetch(`${baseUrl}/books?authorId=${authorId}`)
                    .then(res => res.json())
        }
    })

});