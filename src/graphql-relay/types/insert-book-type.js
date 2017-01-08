import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLFloat } from 'graphql';

export const insertBookType = new GraphQLInputObjectType({

	name: 'InsertBook',

	fields: () => ({
		title: {
			type: GraphQLString
		},
		category: {
			type: GraphQLString
		},
		price: {
			type: GraphQLFloat
		},
		authorId: {
			type: GraphQLID
		}
	})

});