const { GraphQlObjectTybe, GraphQLInt, GraphQLString } = require('graphql')

const launchType = new GraphQlObjectTybe({
    name: 'launch',
    fields: () => ({
        flat_number: { type: GraphQLInt },
        mission_number: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
    })
})