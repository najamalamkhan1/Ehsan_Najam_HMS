const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors())

mongoose.connect(
    'mongodb+srv://najamalamkhan1321:najam1234@cluster0.ycjjcz2.mongodb.net/hotmanagment_DB'
)
// database connect
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
})
db.once('connected', () => {
    console.log('MongoDb Connected');
})

// router impotrs 
const foodRouter = require('./Routes/food.route')
const orderRouter = require('./Routes/order.route')
const userRouter = require('./Routes/user.route')

// using routers 
app.use('/foods',foodRouter)
app.use('/orders',orderRouter)
app.use('/users',userRouter)



const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})