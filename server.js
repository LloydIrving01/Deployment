require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Homepage Route
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;