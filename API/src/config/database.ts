import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://admin:admin@prova-angular.qb3nq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Aplicação conectada ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar comnpm install mongoose --save o banco: ${error}`);
  });

export { mongoose };
