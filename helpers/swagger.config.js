export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "An API for user Auth and generating tickets",
      version: "1.0.0",
      description: " This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more aboutSwagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3._If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_ Some useful links:- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",

      contact: {
        email: "salam@gmail.com",
      },
    },

    servers: [
        { 
          "url": 'http://localhost:9000/api'
        },
       
        { 
          
          "url": 'http://localhost:7000/api',
          description: "development server"
        }

    ],

    tags: [
        {
            name: 'Users',
            description: 'Everything about the user',
          
            externalDocs: {
               description: 'find out more about users',
               url: 'https://google.com'
            }
        },

        {
            name: 'Tickets',
            description: 'Everything about a user ticket'
        }
    ],



  paths: {
     '/users': {

      get: {
         summary: 'Infos about all the users in the db',
         description: 'Getting all users',
         tags: [
          'Users'
         ],
         responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/User" },
                },
              },
            },
          },
        },

      }
     }
    },
   

   components: {
     schemas: {
      User: { 
        type: 'object',

        properties: {
          email: {
            type: 'string',
            description: 'This is the users email'
          },

          password: {
            type: 'string',
            description: 'this is the users email'
          },

          tickets: {
            type: 'array',
            description: 'users tickets'
          }

        },
      },
     },
   },

  },
  

  apis: ["./routes*.js"],
};
