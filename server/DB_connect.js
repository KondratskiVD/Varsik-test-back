const Sequelize = require('sequelize')

let DB_NAME
let USER_NAME
let DB_PASSWORD

if (process.env.NODE_ENV === 'development') {
  DB_NAME = 'marathons'
  USER_NAME = 'user'
  // USER_NAME = 'Vitaliy_DB'
  DB_PASSWORD = 'user'
  // DB_PASSWORD = 'PrettyVarsik'
  // DB_PASSWORD = mongodb+srv://Vitaliy_DB:<password>@cluster0.gd530.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
} else {
  DB_NAME = process.env.DB_NAME
  USER_NAME = process.env.USER_NAME
  DB_PASSWORD = process.env.DB_PASSWORD
}

const connection = new Sequelize(DB_NAME, USER_NAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

module.exports = connection
