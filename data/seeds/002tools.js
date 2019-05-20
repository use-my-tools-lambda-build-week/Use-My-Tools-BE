
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          user_id:"1",
          tool:"hammer",
          price:"10.50",
          description:"Ya hit stuff, it gets nailed",
          image_url:"https://sabersmith.com/wp-content/uploads/2017/12/Aluminum-Thor-Hammer.jpg",
          
      },
      
      ]);
    });
};
