const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.use(express.static(
    path.join(__dirname, "../client/build")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));