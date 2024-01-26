const app = require('./app');
const mongoose = require('mongoose');
const config = require('./service.json');

mongoose.connect(config.MONGODB_SERVER)
         .then(()=> console.log("Connected to MongoDB!"))
         .catch(err => {
            console.log("MongoDB connection failed", err.message)
         });

const port = config.PORT || 5004;
app.listen(port, (err)=>{
   if(err){
      console.log("Server failed to start:", err.message);
   }
   console.log(`Listening on port ${port}`);
});
