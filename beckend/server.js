const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Create a Schema
const MessageSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    topic: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a Model
const Message = mongoose.model('Message', MessageSchema);

// POST route to save message
app.post('/messages', async (req, res) => {
    const { firstName, lastName, email, phone, topic, message } = req.body;
    try {
        const newMessage = new Message({ firstName, lastName, email, phone, topic, message });
        await newMessage.save();
        res.status(201).send('Message saved!');
    } catch (err) {
        res.status(400).send('Error saving message');
    }
});

// GET route to fetch messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(400).send('Error fetching messages');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
