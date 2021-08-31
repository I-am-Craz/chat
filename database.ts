export  const mongoose = require('mongoose');
export  const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/chat', { useUnifiedTopology: true, useNewUrlParser: true });
