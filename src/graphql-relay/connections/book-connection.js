import { bookType } from '../types/book-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: bookConnection, edgeType: BookEdge } = 
	connectionDefinitions({ name: 'Book', nodeType: bookType });