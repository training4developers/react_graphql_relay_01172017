import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const insertAuthorType = new GraphQLInputObjectType({

	name: 'InsertAuthor',

	fields: () => ({
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	})

});

/*

mutation InsertAuthor($author: InsertAuthorType) {
  insertAuthor(author: $author) {
 		... authorDetails   
  }
}

fragment authorDetails on Author {
  id
  firstName
  lastName
}

{
  "author": { "firstName": "Todd", "lastName": "Smalls" }
}

*/