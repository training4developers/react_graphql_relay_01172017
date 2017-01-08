import { GraphQLObjectType } from 'graphql';
import { nodeField } from '../../relay-utils/node-definitions';
import { viewerType } from './viewer-type';
import Viewer from '../../relay-models/viewer';

export const queryType = new GraphQLObjectType({

	name: 'Query',
	fields: () => ({
		node: nodeField,
		viewer: {
			type: viewerType,
			resolve: () => new Viewer({ id: 1 })
		}
	})

});