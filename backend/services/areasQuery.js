const db = require("./db.js");
const helper = require("../helper.js");
const config = require("../config.js");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Areas LIMIT ${offset},${config.listPerPage}`
  );
  const data = {
    main: helper.emptyOrRows(rows),
    status: 200
}
  const meta = { page };

  return { data, meta };
}

module.exports = { getMultiple };
