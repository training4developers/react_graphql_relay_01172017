import { GraphQLInputObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const insertWidgetType = new GraphQLInputObjectType({

	name: 'InsertWidget',

	fields: () => ({
		name: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		color: {
			type: GraphQLString
		},
		size: {
			type: GraphQLString
		},
		quantity: {
			type: GraphQLInt
		}
	})

});