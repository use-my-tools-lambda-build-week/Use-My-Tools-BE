
    
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tools")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tools").insert([
        {
          toolName: "Hammer",
       imageUrl:
            "http://lorempixel.com/640/480",
          price: 3.00,
          description:"I hit things",
          deposit:"5.00",
         userID: 1,
         
        },
        {
          toolName: "Screwdriver",
       imageUrl:
            "http://lorempixel.com/640/480",
          price: 12.34,
          description:"I screw things",
          deposit:"5.00",
         userID: 2
        },
        {
          toolName: "drill",
       imageUrl:
            "http://lorempixel.com/640/480",
          price: 2.3,
          description:"I drill things",
          deposit:"5.00",
         userID: 3
        },
        {
          toolName: "Angle Drill",
       imageUrl:
            "http://lorempixel.com/640/480",
            description:"I drill things at an angle",
          price: 10.00,
          deposit:"5.00",
         userID: 4
        },
        {
          toolName: "Sledgehammer",
       imageUrl:
            "hhttp://lorempixel.com/640/480",
          price: 5.42,
          description:"I hit things very hard",
          deposit:"5.00",
         userID: 5
        },
        {
          toolName: "Allen wrench",
       imageUrl:
            "http://lorempixel.com/640/480",
          price: 9.34,
          description:"I tighten things",
          deposit:"5.00",
         userID: 6
        },
        {
          toolName: "Jackhammer",
       imageUrl:
            "http://lorempixel.com/640/480",
          price: 8.00,
          description:"I bust out concrete ",
          deposit:"5.00",
         userID: 7
        },
        {
          toolName: "Impact drill",
       imageUrl:
            "http://lorempixel.com/640/480",
            description:"I drill AND hit things",
            deposit:"5.00",
          price: 6.21,
         userID: 8
        }
        
      ]);
    });
};

