const express = require('express');

const html = require('./routes/html');
const api = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(html);
app.use(api);

app.listen(PORT, () => {
    console.log(`server now listening on localhost:${PORT}`);
});