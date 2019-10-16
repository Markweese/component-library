db.createCollection("users", {
  validator: {
    $jsonSchema: {
      email: {
        bsonType:"string"
      },
      password: {
        bsonType:"string"
      },
      favorites: {
        bsonType: "array"
      }
    }
  }
});

db.createCollection("components", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "name", "html", "type", "creator" ],
         properties: {
            name: {
             bsonType: "string",
             description: "must be a string and is required"
            },
            html: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            type: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            creator: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            tags: {
              bsonType: "array"
            }
         }
      }
   }
});

db.users.createIndex({ email:1 });
db.components.createIndex({ name:1, type:1, creator:1, tags:1 });

db.components.insert({ name:"Sample Component", html:"<h1>Sample Component</h1>", creator:"Mongod", type:"block-icon-tile-grid" });
