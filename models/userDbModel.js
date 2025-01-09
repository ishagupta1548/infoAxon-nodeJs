const { sql, poolPromise } = require("./dbConfig");

// Function to get all users
async function getAllUsers() {
  try {
    const pool = await poolPromise; // Get the connection pool
    const result = await pool.request().query("SELECT * FROM Users"); // Execute query
    return result.recordset; // Return the rows
  } catch (err) {
    console.error("Error querying the database:", err);
    throw err;
  }
}

// Function to get a user by ID
async function getUserById(userId) {
  try {
    const pool = await poolPromise; // Get the connection pool
    const result = await pool
      .request()
      .input("userId", sql.Int, userId) // Use parameterized queries to prevent SQL injection
      .query("SELECT * FROM Users WHERE id = @userId");
    return result.recordset[0]; // Return the first row
  } catch (err) {
    console.error("Error querying the database:", err);
    throw err;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
};
