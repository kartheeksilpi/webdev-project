const express = require('express')
const app = express()

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Handle the form submission
app.get('/signup', (req, res) => {
    const firstname = req.query.firstname
    const lastname = req.query.lastname
    const email = req.query.email
    const password = req.query.password

    // Insert the data into the database
    // ...

    res.send('Signup successful!')
})

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
})