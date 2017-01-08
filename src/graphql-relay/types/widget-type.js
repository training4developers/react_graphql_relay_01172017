import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../../relay-utils/node-definitions';
import { registerType } from '../../relay-utils/resolve-type';
import { getResource } from '../resources';
import Widget from '../../relay-models/widget';

export const widgetType = new GraphQLObjectType({

	name: 'Widget',
	description: 'A widget.',
	fields: () => ({
		id: globalIdField('Widget'),
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
			type: GraphQLString,
		},
		quantity: {
			type: GraphQLInt
		}
	}),
	interfaces: [nodeInterface]

});

registerType(Widget, widgetType, id => getResource('http://localhost:3010','widgets', id));