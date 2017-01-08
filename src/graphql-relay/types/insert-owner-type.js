import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const insertOwnerType = new GraphQLInputObjectType({

	name: 'InsertOwner',

	fields: () => ({
		name: {
			type: GraphQLString
		}
	})

});