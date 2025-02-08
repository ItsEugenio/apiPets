const express = require('express');
const cors = require('cors');
import UsersRoutes from "./src/routes/user.routes"
import PetsRoutes from "./src/routes/pets.routes"
import StepsRoutes from "./src/routes/steps.routes"
const app = express();


app.set("port", 8080);

app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "esta es mi api mascotas" });
});



app.use("/api/users", UsersRoutes);
app.use("/api/pets", PetsRoutes);
app.use("/api/steps", StepsRoutes)

export default app;
