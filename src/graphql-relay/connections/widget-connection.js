import { widgetType } from '../types/widget-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: widgetConnection, edgeType: WidgetEdge } = 
	connectionDefinitions({ name: 'Widget', nodeType: widgetType });