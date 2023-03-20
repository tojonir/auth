require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`server is running on port ${port}`));