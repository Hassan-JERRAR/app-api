const typeDefs = `
        type Article {
            id : ID!
            titre: String
            description: String
            date: String
        }
        type Response {
            succes : Boolean
            message: String!
        }
        type Query {
            sendMessage : Response!
            getArticles: [Article]!
            getArticle(id: ID!): Article
            deleteArticle(id: ID!): Int
            updateArticle(id: ID!, titre: String, description: String, date: String): [Int]
            createArticle(titre: String, description: String, date: String): Article
            registerUser(firstName: String, lastName: String, mail: String, password: String, isAdmin: Boolean, dateBirth: String, city: String, address: String, zipcode: Int, phone: Int): User
        }
        type User {
            id: ID!
            firstName: String
            lastName: String
            mail: String
            password: String
            isAdmin: Boolean
            dateBirth: String
            city: String
            address: String
            zipcode: Int
            phone: Int
        }
    `;

module.exports = typeDefs;