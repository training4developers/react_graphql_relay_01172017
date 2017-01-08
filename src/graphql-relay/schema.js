import { GraphQLSchema } from 'graphql';
import { queryType as query } from './types/query-type';
import { mutationType as mutation } from './types/mutation-type';

//export const schema = new GraphQLSchema({ query });
export const schema = new GraphQLSchema({ query, mutation });