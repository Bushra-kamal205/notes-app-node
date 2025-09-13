const mongoose = require('mongoose');

function connectDB() {
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connect successfully ');
}).catch(err=()=>{
    console.log(`Error in database connection ${err}`);
});
}
module.exports = connectDB;