// const express = require('express')
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("champian h bhai tu hello kya baat h" );
// })
// app.get("/profile",(req,res)=>{
//     res.send("champian h bhai tu bhot bada, mai tho idhar bhi chnag");
// })

// app.listen(3000);

const express = require('express')
const app = express()

// app.use((req,res,next)=>{
//     console.log("middleware hii")
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("middleware mai 2nd time aya hu")
//     next()
// })

app.get("/",(req,res)=>{
    res.send("champian h bhai tu " );
    
})


    app.get("/profile",(req,res,next)=>{
        res.send("champian h bhai tu bhot bada, mai tho idhar bhi chnag");
        return next(new Error("kya hal hai"));
    })

    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })

    app.listen(3001);