import { GraphQLObjectType } from 'graphql';
import { widgetType } from './widget-type';
import { ownerType } from './owner-type';
import { bookType } from './book-type';
import { authorType } from './author-type';
import { insertWidgetType } from './insert-widget-type';
import { insertOwnerType } from './insert-owner-type';
import { insertBookType } from './insert-book-type';
import { insertAuthorType } from './insert-author-type';
import { insertResource } from './resources';

export const mutationType = new GraphQLObjectType({

	name: 'Mutation',
	description: 'Modifies data on the server.',
	fields: () => ({

		insertWidget: {
			type: widgetType,
			args: { widget: { type: insertWidgetType } },
			resolve: (_, { widget }, { baseUrl }) => insertResource(baseUrl, 'widgets', widget)
		},

		insertOwner: {
			type: ownerType,
			args: { owner: { type: insertOwnerType } },
			resolve: (_, { owner }, { baseUrl }) => insertResource(baseUrl, 'owners', owner)
		},

		insertBook: {
			type: bookType,
			args: { book: { type: insertBookType } },
			resolve: (_, { book }, { baseUrl }) => insertResource(baseUrl, 'books', book)
		},

		insertAuthor: {
			type: authorType,
			args: { author: { type: insertAuthorType } },
			resolve: (_, { author }, { baseUrl }) => insertResource(baseUrl, 'authors', author)
		}

	})

});

/*

mutation insertWidget($newWidget: InsertWidget) { 

	insertWidget(widget: $newWidget) {
    id
    name
    color
  }


}

{
  "newWidget": {
  	"name": "Alex", "color": "orange", "size": "medium",
    "description": "Alex is a nice and kind person.", "quantity": 12
  }
}

*/
