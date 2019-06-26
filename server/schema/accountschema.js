const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'Account',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});