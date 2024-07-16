const express = require('express');
const Cors = require('cors');



const {connectDB}  = require('./src/config/database');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(Cors());

/** env Port */
const port = process.env.PORT;

/** Connnect DataBase */
connectDB();



/** homeurl */
app.get('/',(req,res)=>{
  res.status(200).json({
    "data":"Tourism API",
    "status":"success"
  })
});


/**App Api routes */
const {tourismApiRoutes} = require('./src/routes/index');

app.use('/api/v1',tourismApiRoutes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});


