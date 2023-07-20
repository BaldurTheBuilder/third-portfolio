const mongoose = require('mongoose');

// Options should not be needed with mongoose v7^
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jackPortfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
});

module.exports = mongoose.connection;