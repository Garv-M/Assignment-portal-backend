const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./Routes/userRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
});