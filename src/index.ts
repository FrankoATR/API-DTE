import express from "express";
import dteRoutes from "./routes/dte.routes";

const app = express();
app.use(express.json());

app.use("/api/dte", dteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
