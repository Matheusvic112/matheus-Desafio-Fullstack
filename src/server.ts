import { AppDataSource } from "./data-source";
import app from "./app";

(async () => {
  await AppDataSource.initialize().catch((err: any) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(3000, () => {
    console.log("Servidor executando");
  });
})();
