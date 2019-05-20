const faker =require('faker')

function createTool() {
  return {
    user_id:"1",    
    tool:faker.lorem.word(),
    description:faker.lorem.words(),
    image_url:"http://lorempixel.com/640/480",
  };
}


toolList = [];

for (let i = 1; i < 40; i++) {
  toolList.push(createTool());
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  exports.seed = function(knex, Promise) {
    return knex("tools").then(function() {
      // Inserts seed entries
      return knex("tools").insert(toolList);
    });
  };
}