const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
console.log(publicPath)
const { pool } = require('../config')
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const addSignUp = (req, res) => {
    const { email } = req.body

    pool.query(
        'INSERT INTO signups (email) VALUES ($1)',
        [email],
        (error) => {
            if (error) {
                throw error
            }
            res.status(201).json({ status: 'success', message: 'new signup added.' })
        }
    )
}
app.route('/')
    .post(addSignUp)
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
