import { GraphQLSchema } from 'graphql';
import { queryType as query } from './query-type';
import { mutationType as mutation } from './mutation-type';

export const schema = new GraphQLSchema({ query, mutation });