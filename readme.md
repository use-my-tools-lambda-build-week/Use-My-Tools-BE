** POST requests
1. Add a user and receive token
http://url/api/auth/register

Upon receiving a token it's recommended to save it in local storage.

Example
All fields required
{
"first_name":"Test",
"last_name":"Test,
"username":"Test",
"password":"Test234"
}

1. Login an existing user and receive token
http://url/api/auth/login

Upon receiving a token it's recommended to save it in local storage.

Example
all fields required
{
    "username":"Test",
    "password":"Test"
}

1. Add a tool
http://url/api/tools

Example
user_id, tool, and price are required fields
{
    "user_id":"1",
    "tool":"hammer",
    "price":"10.50",
    "description":"Ya hit stuff, it gets nailed",
    "image_url":"http://imgurl.com",
    "is_rented":"false"
}

1. Add a tool to rented list
http://url/api/toolrental

Example
All fields required (renter_id === user_id)

{
    "renter_id":"1",
    "tool_id":"1"
}

**Get requests

1. Get All Tools
http://url/api/tools

1. Get tool by ID
(:id === tool_id)
http://url/api/tools/:id

1. Get all users
http://url/api/users


1. Get user by ID
http://url/api/users/:id

1. Get all rented tools
http://url/api/toolrental



**Delete requests

1. Delete a user
http://url/api/users/:id

1. Delete a tool
http://url/api/tools/:id

1. Delete a rental from rented list
http://url/api/toolrental/:id


**Update Requests

1. Update a user
http://url/api/users/:id
Example
All fields required
{
"first_name":"Test",
"last_name":"Test,
"username":"Test",
"password":"Test234"
}

1. Update a tool
http://url/api/tools/:id

Example
user_id, tool, and price are required fields

{
    "user_id":"1",
    "tool":"hammer",
    "price":"10.50",
    "description":"Ya hit stuff, it gets nailed",
    "image_url":"http://imgurl.com",
    "is_rented":"false"
}






