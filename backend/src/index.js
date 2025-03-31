import dotenv from "dotenv";
import { app } from "./app.js";
import { db_connect } from "./DB/db.connect.js";

dotenv.config({
    path: "./.env",
});

let port = process.env.PORT || 8000;
db_connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });       
    })
    .catch((err) => {
        console.log(err);
    });


