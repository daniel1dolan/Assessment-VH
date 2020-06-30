exports.up = function (knex) {
  knex.schema
    .createTable("weather", (tbl) => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.integer("temperature");
      tbl.integer("humidity");
      tbl.date("date", 128).notNullable();
    })
    .then((res) => {
      console.log(res);
    });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("weather");
};
