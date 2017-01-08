import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } from 'graphql';
import { authorType } from './author-type';
import { getResource } from './resources';

export const bookType = new GraphQLObjectType({

	name: 'Book',

	fields: () => ({
		id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		},
		category: {
			type: GraphQLString
		},
		price: {
			type: GraphQLFloat
		},
		author: {
			type: authorType,
			resolve: ({ authorId }, _, { baseUrl }) =>
				getResource(baseUrl, 'authors', authorId)
		}
	})

});