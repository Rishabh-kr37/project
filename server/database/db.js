import mongoose from "mongoose";



 const Connection= async(username, password)=>{
        const URL=`mongodb://${username}:${password}@ecommerce-web-shard-00-00.dc1sq.mongodb.net:27017,ecommerce-web-shard-00-01.dc1sq.mongodb.net:27017,ecommerce-web-shard-00-02.dc1sq.mongodb.net:27017/ecommerce-web?ssl=true&replicaSet=atlas-e5lr4u-shard-0&authSource=admin&retryWrites=true&w=majority`;
        try {
               await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
                console.log('Database Connected Succesfully');
        } catch(error){
                console.log('Error while connecting with database',error.message);

        }
}; 

export default Connection;