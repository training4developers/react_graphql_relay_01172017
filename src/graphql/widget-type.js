import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql';
import { ownerType } from './owner-type';
import { getResource } from './resources';

export const widgetType = new GraphQLObjectType({

	name: 'Widget',
	description: 'A widget.',
	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'Id of the widget.'
		},
		name: {
			type: GraphQLString
		},
		color: {
			type: GraphQLString
		},
		size: {
			type: GraphQLString,
		},
		quantity: {
			type: GraphQLInt
		},
		owner: {
			type: ownerType,
			resolve: ({ ownerId }, _, { baseUrl }) =>
				getResource(baseUrl, 'owners', ownerId)
		}
	})

});