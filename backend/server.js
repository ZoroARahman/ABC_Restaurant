 import express from "express"
 import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import router from "./routes/reservationRoute.js"
import { errorMiddleware } from "./middleware/middleware.js"




//  app config
const app =express()
const port=4001

// middleware
app.use(express.json())
app.use(cors())
app.use(errorMiddleware)

// db connrct
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use('/api/v1/reservation',router)

app.get("/",(req,res)=>{
    res.send("Api working")

})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://arahman2001:arahman2001@arahman2001.0zc8xrf.mongodb.net/?