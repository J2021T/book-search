const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id
        username
        email
        password
        savedBooks
    }
`;