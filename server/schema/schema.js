const graphql = require('graphql');
const _ = require('lodash');
const AccountType = require('./accountschema');
const CarType = require('./carschema');
const ParkingType = require('./parkingschema');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID
} = graphql;

var Account = [
    { name: 'Adib Moghimy', email: 'adib.moghimy@gmail.com', password: 'adib123456', id: '1'},
    { name: 'Naeem Baghi', email: 'naeem.baghi@gmail.com', password: 'naeem123456', id: '2'},
    { name: 'Sepehr Ghodrat', email: 'sepehr.ghodrat@gmail.com', password: 'sepehr123456', id: '3'}
];

var Car = [
    { name: 'BMW', number: '31-A-327-54', timeEnter: '2018-06-26T15:04:34.892Z', cost: 5, id:'1'},
    { name: 'Ferrari', number: '27-B-459-54', timeEnter: '2018-06-26T15:04:34.892Z', cost: 10, id:'2'},
    { name: 'Bugatti', number: '36-C-225-54', timeEnter: '2018-06-26T15:04:34.892Z', cost: 15, id:'3'}
];

var Parking = [
    { name: 'Yazd Parking', address: 'Yazd-Chamran', telNumber: '+9835362412312', location: 'Yazd', costHour: 5, id:'1'},
    { name: 'Isfahan Parking', address: 'Isfahan-Zayanderood', telNumber: '+9833382312472', location: 'Isfahan', costHour: 7, id:'2'},
    { name: 'Tehran Parking', address: 'Tehran-Inghilab', telNumber: '+9821352386472', location: 'Tehran', costHour: 10, id:'3'}
];


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        account: {
            type: AccountType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(Account, { id: args.id });
            }
        },
        car: {
            type: CarType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(Car, { id: args.id });
            }
        },
        parking: {
            type: ParkingType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(Parking, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});