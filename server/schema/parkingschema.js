const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt, GraphQLFloat
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'Parking',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        telNumber: { type: GraphQLFloat },
        location: { type: GraphQLString },
        costHour: { type: GraphQLInt }
    })
});