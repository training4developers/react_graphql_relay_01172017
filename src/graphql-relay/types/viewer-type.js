import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import { nodeInterface } from '../../relay-utils/node-definitions';
import { registerType } from '../../relay-utils/resolve-type';
import Viewer from '../../relay-models/viewer';
import { widgetConnection } from '../connections/widget-connection';
import { bookConnection } from '../connections/book-connection';
import { getAllResources } from '../resources';

export const viewerType = new GraphQLObjectType({

	name: 'Viewer',
	fields: () => ({

		id: globalIdField('Viewer'),
		
		widgets: {
			type: widgetConnection,
			description: 'A list of widgets',
			args: connectionArgs,
			resolve: (_, args, { baseUrl }) =>
				connectionFromPromisedArray(getAllResources(baseUrl, 'widgets'), args)
		},

		books: {
			type: bookConnection,
			description: 'A list of books',
			args: connectionArgs,
			resolve: (_, args, { baseUrl }) =>
				connectionFromPromisedArray(getAllResources(baseUrl, 'books'), args)
		}

	}),
	interfaces: () => [nodeInterface]

});

registerType(Viewer, viewerType, id => new Viewer({ id }));