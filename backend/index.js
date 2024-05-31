const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
