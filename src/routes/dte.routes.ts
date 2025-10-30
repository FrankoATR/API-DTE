import { Router, Request, Response } from "express";
import { signDTE } from "../utils/signer";

const router = Router();

/**
 * Recibe un JSON de factura DTE y devuelve la versión firmada.
 */
router.post("/firmar", (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (!data || typeof data !== "object") {
      return res.status(400).json({ error: "JSON inválido o vacío" });
    }

    const signed = signDTE(data);

    return res.status(200).json({
      message: "Factura firmada exitosamente",
      data: signed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al firmar el DTE" });
  }
});

export default router;
