import express from 'express';
const PORT = process.env.PORT || 9000;
const app = express();

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})