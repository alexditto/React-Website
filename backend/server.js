const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Set defaults
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// Connect to Mongo
const uri = process.env.DUNGEON_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log(`Database is established. The arsenal is ready.`)
})

// Set API
const userRouter = require('./routes/users');
const characterRouter = require('./routes/characters');

app.use('/users', userRouter);
app.use('/character', characterRouter);


app.listen(port, ()=> console.log(`Server started on port ${port}. Welcome Dungeon Master.`));
