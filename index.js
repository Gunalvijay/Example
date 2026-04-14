const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const books = [
    {
        id: 1,
        name: 'JS Interview',
        authorname: 'Gunal'
    },
    {
        id: 2,
        name: 'JS Interview',
        authorname: 'Abinash'
    },
    {
        id: 3,
        name: 'JS Interview',
        authorname: 'Dinesh'
    },
    {
        id: 4,
        name: 'JS Interview',
        authorname: 'Rio'
    }
];

app.use(bodyParser.json())

app.get('/books', function(req, res) {
    return res.json({ books })
});

app.get('/books/:bookId', function(req, res) {
    const id = req.params.bookId;
    const book = books.find((e) => e.id === Number(id));
    return res.json({ book})
});

app.listen(8000, () => console.log(`Serer started at PORT 8000`));