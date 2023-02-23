import app from "./app";


const port: number  = +process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running in port: ${port}`));