import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';

import { nodeInterface } from '../utils/node-definitions';
import { registerType } from '../utils/resolve-type';

import { Viewer } from '../models';
import { bookConnectionType } from '../connections/book-connection';
import { getBooks } from '../resources';

export const viewerType = new GraphQLObjectType({

    name: 'Viewer',

    fields: () => ({
        id: globalIdField('Viewer'),
        books: {
            type: bookConnectionType,
            description: 'A list of books',
            args: connectionArgs,
            resolve: (_, args, { baseUrl }) => 
                connectionFromPromisedArray(getBooks(baseUrl), args)
        }
    }),

    interfaces: () => [ nodeInterface ]

});

registerType(Viewer, viewerType, id => Object.assign(new Viewer(), { id }));