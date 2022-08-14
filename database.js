const mongoose = require("mongoose");
const BD_URI = "mongodb://DESKTOP-1OLE3UD/chaton";

module.exports=()=>{
    const connect=()=>{
        mongoose.connect(
            BD_URI,{
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)=>{
                if(err){
                    console.log(err);
                } else{
                    console.log("Conexión correcta");
                }
            }
        )
    }
    connect();
}