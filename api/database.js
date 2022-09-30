const mongoose = require('mongoose');
const env = require('dotenv')


env.config()

mongoose
.connect(process.env.URL_DB)
.then(() => console.log('DB is Up'))
.catch(() => console.log('error'));