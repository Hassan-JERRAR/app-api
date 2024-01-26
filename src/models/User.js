module.exports = (sequelize, DataTypes) => {
    // Définition du modèle User
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
    lastName : DataTypes.STRING,
    mail : DataTypes.STRING,
    password : DataTypes.STRING,
    isAdmin : DataTypes.BOOLEAN,
    dateBirth : DataTypes.DATE,
    city : DataTypes.STRING,
    address : DataTypes.STRING,
    zipcode : DataTypes.INTEGER,
    phone : DataTypes.INTEGER,
    }, {
        timestamps: false
    });
    return User;
};