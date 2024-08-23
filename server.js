const express = require('express');
const app = express();
const sendEmail = require('./sendEmail');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));

app.post('/send', async (req, res) => {
    const { to, subject, text } = await req.body;
    sendEmail(to, subject, text);
    res.status(200).json({ success: true });
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
