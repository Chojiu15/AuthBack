'use-strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname : DataTypes.STRING,
        lastname : DataTypes.STRING,
        email : DataTypes.STRING,
        password : DataTypes.STRING
    }, {
        timestamps : false
    })

    return User
}