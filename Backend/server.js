import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get('/', (req,res) => {
    res.send({
        message: 'successfull'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
