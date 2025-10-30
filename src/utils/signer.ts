import crypto from "crypto";

/**
 * Simula la firma de un DTE concatenando un hash SHA256.
 */
export function signDTE(payload: any): any {
  const stringified = JSON.stringify(payload);
  const signature = crypto
    .createHash("sha256")
    .update(stringified + "secret-key") // clave simulada
    .digest("hex");

  return {
    ...payload,
    firma: {
      valor: signature,
      fecha: new Date().toISOString(),
      metodo: "SHA256-simulado"
    }
  };
}
