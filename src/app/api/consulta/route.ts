import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const empresa = typeof body?.empresa === "string" ? body.empresa.trim() : "";
    const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
    const contacto = typeof body?.contacto === "string" ? body.contacto.trim() : "";
    const servicio = typeof body?.servicio === "string" ? body.servicio.trim() : "";
    const detalle = typeof body?.detalle === "string" ? body.detalle.trim() : "";

    if (!empresa || !nombre || !contacto || !detalle) {
      return NextResponse.json(
        { error: "Faltan completar campos obligatorios." },
        { status: 400 }
      );
    }

    // Ready to plug in Resend, Nodemailer or CRM webhook in production.
    const inquiryId = `TP-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        ok: true,
        id: inquiryId,
        receivedAt: new Date().toISOString(),
        summary: { empresa, nombre, contacto, servicio },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "No pudimos procesar el formato de la solicitud." },
      { status: 400 }
    );
  }
}
