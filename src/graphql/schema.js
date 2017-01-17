import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

export const query = new GraphQLObjectType({

    name: 'Query',
    description: 'Our query type',
    fields: () => ({
        message: {
            type: GraphQLString,
            description: 'Our message of the day!',
            resolve: () => 'Have wonderful day!'
        }
    })

});

export const schema = new GraphQLSchema({ query });

