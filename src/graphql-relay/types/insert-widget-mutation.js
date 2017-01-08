import { mutationWithClientMutationId, offsetToCursor } from 'graphql-relay';
import { insertWidgetType } from './insert-widget-type';
import { viewerType } from './viewer-type';
import { WidgetEdge } from '../connections/widget-connection';
import Viewer from '../../relay-models/viewer';
import { getAllResources, insertResource } from '../resources';

export const insertWidgetMutationType = mutationWithClientMutationId({
	// name of the mutation
	name: 'InsertWidget',

	// input type (same as args in normal GraphQL)
	inputFields: {
		widget: {
			type: insertWidgetType
		}
	},
	
	mutateAndGetPayload: ({widget}) => {
		// save widget
		return insertResource('http://localhost:3010', 'widgets', widget);		
	},

	outputFields: {
		// output the viewer
		viewer: {
			type: viewerType,
			resolve: () => new Viewer({ id: 1 })
		},
		// output the updated widget edge
		widgetEdge: {
			type: WidgetEdge,
			resolve: widget => {
				return getAllResources('http://localhost:3010','widgets').then(widgets => {
					const offset = widgets.indexOf(widgets.find(w => w.id === widget.id));
					return {
						// where to update the cursor
						cursor: offsetToCursor(offset),
						// updated node data
						node: widget
					};
				});
			}			
		}
	}

});