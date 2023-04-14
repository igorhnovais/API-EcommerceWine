import app from "./app";


const port: number  = +process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));