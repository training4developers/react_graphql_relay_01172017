import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import { bookType } from './book-type';
import { getAllResources } from './resources';

export const authorType = new GraphQLObjectType({

	name: 'Author',

	fields: () => ({
		id: {
			type: GraphQLID
		},
		firstName:	 {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		},
		books: {
			type: new GraphQLList(bookType),
			resolve: ({ id: authorId }, _, { baseUrl }) =>
				getAllResources(baseUrl, 'books', `authorId=${authorId}`)
		}
	})

});