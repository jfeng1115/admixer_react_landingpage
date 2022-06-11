const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
console.log(publicPath)
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/',(req, res) => {
    console.log(req.body)
    res.sendStatus(200)
} )
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
