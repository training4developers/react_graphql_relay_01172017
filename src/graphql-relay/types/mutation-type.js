import { GraphQLObjectType } from 'graphql';
import { insertWidgetMutationType } from './insert-widget-mutation';

export const mutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		insertWidget: insertWidgetMutationType
	})
});
