//console.log("Hellow World, this is my first Node js Project");
const express = require("express");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Swagger Init - start
const swaggerOption = {
  swaggerDefinition: (swaggerJSDoc.options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Omidiran Daniel",
      },
      servers: ["http://localhost3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Swagger Init - end

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000, () => {
  console.log("I am ready to lisen you");
});
