const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/student'
async function connectWithDB() {
	try {
		await mongoose.connect(DB_URL);
		console.log("connect with DB");
	} catch(err) {
		console.log("Not connected with DB");
	}
}
 
 connectWithDB(); 