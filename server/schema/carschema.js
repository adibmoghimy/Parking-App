const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,GraphQLInt
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'Car',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        timeEnter: { type: GraphQLString },
        cost: { type: GraphQLInt }
    })
});