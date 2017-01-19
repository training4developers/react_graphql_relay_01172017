import { bookType } from '../types/book-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: bookConnectionType, edgeType: bookEdgeType } =
    connectionDefinitions({ name: 'Book', nodeType: bookType});