import {
	GraphQLObjectType, GraphQLString,
	GraphQLID, GraphQLList
} from 'graphql';
import { widgetType } from './widget-type';
import { getAllResources } from './resources';

export const ownerType = new GraphQLObjectType({

	name: 'Owner',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		widgets: {
			type: new GraphQLList(widgetType),
			resolve: ({ id: ownerId }, _, { baseUrl }) =>
				getAllResources(baseUrl, 'widgets', `ownerId=${ownerId}`)
		}
	})

});