const axios = require('axios')

const { GraphQlObjectTybe, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')

const LaunchType = new GraphQlObjectTybe({
    name: 'Launch',
    fields: () => ({
        flat_number: { type: GraphQLInt },
        mission_number: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    })
})

const RocketType = new GraphQlObjectTybe({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
})

const RootQuery = new GraphQlObjectTybe({
    name: 'RootObjectType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            async resolve(parent, args) {
                const response = await axios.get('https://api.spacexdata.com/v3/launches')
                return response.data;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})