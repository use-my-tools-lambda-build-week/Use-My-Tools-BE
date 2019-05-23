
    
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tools")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tools").insert([
        {
          tool: "Hammer",
         image_url:
            "http://lorempixel.com/640/480",
          price: 3.00,
          description:"I hit things",
          user_id: 1
        },
        {
          tool: "Screwdriver",
         image_url:
            "http://lorempixel.com/640/480",
          price: 12.34,
          description:"I screw things",
         user_id: 2
        },
        {
          tool: "drill",
         image_url:
            "http://lorempixel.com/640/480",
          price: 2.3,
          description:"I drill things",
         user_id: 3
        },
        {
          tool: "Angle Drill",
         image_url:
            "http://lorempixel.com/640/480",
            description:"I drill things at an angle",
          price: 10.00,
         user_id: 4
        },
        {
          tool: "Sledgehammer",
         image_url:
            "hhttp://lorempixel.com/640/480",
          price: 5.42,
          description:"I hit things very hard",
         user_id: 5
        },
        {
          tool: "Allen wrench",
         image_url:
            "http://lorempixel.com/640/480",
          price: 9.34,
          description:"I tighten things",
         user_id: 6
        },
        {
          tool: "Jackhammer",
         image_url:
            "http://lorempixel.com/640/480",
          price: 8.00,
          description:"I bust out concrete ",
         user_id: 7
        },
        {
          tool: "Impact drill",
         image_url:
            "http://lorempixel.com/640/480",
            description:"I drill AND hit things",
          price: 6.21,
         user_id: 8
        }
        
      ]);
    });
};

