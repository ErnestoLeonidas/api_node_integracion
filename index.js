// index.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/login', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
