import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../../relay-utils/node-definitions';
import { registerType } from '../../relay-utils/resolve-type';
import Book from '../../relay-models/book';
import { getResource } from '../resources';

export const bookType = new GraphQLObjectType({

	name: 'Book',

	fields: () => ({
		id: globalIdField('Book'),
		title: {
			type: GraphQLString
		},
		category: {
			type: GraphQLString
		},
		price: {
			type: GraphQLFloat
		}
	}),
	interface: [nodeInterface]

});

registerType(Book, bookType, id => getResource('http://localhost:3010','books', id));