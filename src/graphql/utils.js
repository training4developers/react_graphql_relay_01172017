import { GraphQLList, GraphQLID } from 'graphql';
import fetch from 'node-fetch';

export const getAllField = (typeObj, pluralTypeName) => ({
	type: new GraphQLList(typeObj),
	resolve: () =>
		fetch(`http://localhost:3010/${pluralTypeName}`)
			.then(res => res.json())
});

export const searchIdField = (typeObj, typeName) => ({
	type: typeObj,
	args: {
		id: {
			type: GraphQLID
		}
	},
	resolve: (_, { id }) => 
		fetch(`http://localhost:3010/${typeName}/${id}`)
			.then(res => res.json())			
});
