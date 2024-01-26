
const db = require('../../models');

const resolvers = {
    Query: {
        sendMessage: () => {
            return {
                // succes: true,
                message: "Hello world"
            }
        },
        getArticles: (parent, args, context, info) => {
          
            return db.articles.findAll();
        },
    
        getArticle: (parent, args, context, info) => {
            console.log(args);
            return db.articles.findByPk(args.id);
        },
        deleteArticle: (parent, args, context, info) => {
            console.log(args);
            return db.articles.destroy({
                where: {
                    id: args.id
                }
            });

        },
        updateArticle : (parent, args, context, info) => {
            console.log(args);
            return db.articles.update({
                titre: args.titre,
                description: args.description,
                date: args.date,
            }, {
                where: {
                    id: args.id
                }
            });
        },
        createArticle : (parent, args, context, info) => {
            console.log(args);
            return db.articles.create({
                titre: args.titre,
                description: args.description,
                date: args.date,
            });
        },
        registerUser : (parent, args, context, info) => {
            console.log(args);
            return db.User.create({
                firstName: args.firstName,
                lastName: args.lastName,
                mail: args.mail,
                password: args.password,
                isAdmin: args.isAdmin,
                dateBirth: args.dateBirth,
                city: args.city,
                address: args.address,
                zipcode: args.zipcode,
                phone: args.phone,
            });
        },

    }
}

module.exports = resolvers;