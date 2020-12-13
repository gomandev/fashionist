const axios = require('axios')

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    })
})

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootObjectType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            async resolve(parent, args) {
                const response = await axios.get('https://api.spacexdata.com/v3/launches')
                return response.data;
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const response = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                return response.data
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            async resolve(parent, args) {
                const response = await axios.get('https://api.spacexdata.com/v3/rockets')
                return response.data;
            }
        },
        rocket: {
            type: RocketType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${args.flight_number}`)
                return response.data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})