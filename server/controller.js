require('dotenv').config()
const {HEROKU_POSTGRESQL_SILVER_URL} = process.env
const { password } = require('pg/lib/defaults')
const Sequelize = require('sequelize')

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(HEROKU_POSTGRESQL_SILVER_URL, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    postUsers: async(req, res) => {
        const{username, password} = req.body
        const users = await sequelize.query(`SELECT * from users WHERE username = '${username}';`)
        console.log(users)
        if(users[0].length === 0){ 
            return sequelize.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}') returning *;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
        }else{
            return res.status(400).send("This Username Is Already Taken Please Try Again") 
        }  
    }, 

    getProducts: async(req, res) => {
        sequelize.query(`SELECT  *  from products;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    saveFavorite: (req, res) => {
        const{user_id} = req.body
        const{id} = req.params
        sequelize.query(`INSERT INTO favorite_list (user_id, products_id) VALUES ('${user_id}','${id}')`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    favoriteList: (req, res) => {
        let {favorite_list} = req.body

        sequelize.query(`updateted favoriteList = true
        where favorite_list = ${favorite_list};`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}