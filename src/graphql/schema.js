import { GraphQLSchema } from 'graphql';

import { query } from './types/query-type';

export const schema = new GraphQLSchema({ query });
