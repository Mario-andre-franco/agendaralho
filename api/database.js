const mongoose = require('mongoose');
const URI = 'mongodb+srv://dev:mariolaDev@clusterdev.cnikh8w.mongodb.net/agendaralho?retryWrites=true&w=majority'



mongoose
.connect(URI)
.then(() => console.log('DB is Up'))
.catch(() => console.log('error'));