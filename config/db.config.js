const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b46983ffaeda3d",
  password: "c922bf53",
  database: "heroku_5b653cdc9d932a5",
  connectionLimit: 10
});
/** Connection pool creation - END */

module.exports = db;
