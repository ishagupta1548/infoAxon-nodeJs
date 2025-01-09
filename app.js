const express = require("express");
require("dotenv").config();
const { sql, poolPromise } = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const policyRoutes = require("./Routes/policyRoute");
const { handleFileUpload } = require("./controllers/fileUpload");
const nunjucks = require("nunjucks");

const app = express();
const PORT = 3000;
nunjucks.configure("views", {
  autoescape: true, // Escape HTML by default
  express: app, // Integrates with Express
  watch: true, // Watch for changes in templates
});

app.use(express.json());
app.set("view engine", "njk");
// Test DB connection during server startup
async function checkDatabaseConnection() {
  try {
    const pool = await poolPromise; // Get the connection pool
    const result = await pool.request().query("SELECT 1 AS result"); // Test query
    if (result.recordset[0].result === 1) {
      console.log("Database connection successful!");
    }
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the application if the connection fails
  }
}

checkDatabaseConnection();
app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello, Nunjucks!",
    description: "Welcome to Nunjucks templating.",
  });
});

app.use("/users", userRoutes);
app.use("/policies", policyRoutes);
app.post("/upload", handleFileUpload);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
});
