const { GraphQlObjectTybe, GraphQLInt } = require('graphql')

const launchType = new GraphQlObjectTybe({
    name: 'launch',
    fields: () => ({
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
        flat_number: { type: GraphQLInt },
    })
})