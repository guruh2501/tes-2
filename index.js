const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req,res) => {
    res.send(`Tampilan Web awal`)
})

app.listen(PORT, () => {
    console.log(`Server running ono port ${PORT}`);
})