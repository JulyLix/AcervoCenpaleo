const variables ={
    Api : {
        port : process.env.port || 3000
    },
    Database : {
        connection : process.env.connection || 'mongodb+srv://:Juliana<10456283>@cluster0-ar0io.mongodb.net/Cenpaleo'
    },
    Security : {
        secretKey: '9B7EA56D7952BC6B2058510801A5F4A1'
    }
}

module.exports = variables