
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", table => {
        table.increments();
        table.string("first_name", 30).notNullable();
        table.string("last_name", 40).notNullable();
        table
          .string("username", 30)
          .notNullable()
          .unique();
        table.string("password", 100).notNullable();
        table
          .string("thumbnail_url", 256)
          .defaultTo("https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg");
      })  
      .createTable("tools", table => {
        table.increments();
        table
          .integer("user_id")
          .unsigned()
          .references("users.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.string("tool", 40).notNullable();
        table.boolean("rented",false).notNullable();
        table.string("description", 600);
        table.string("image_url", 256);
      })
    }

      exports.down = function(knex, Promise) {
        return knex.schema
          .dropTableIfExists("tools")
          .dropTableIfExists("users");
      };
