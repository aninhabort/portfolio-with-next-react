import { NextApiRequest, NextApiResponse } from "next/dist/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const emailSubject = trimmedSubject
      ? `${trimmedSubject} — ${name}`
      : `Nova mensagem de ${name}`;
    const emailBody = [
      `Mensagem de: ${name}`,
      `E-mail: ${email}`,
      trimmedSubject ? `Assunto: ${trimmedSubject}` : undefined,
      `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'carol2015bortolini@gmail.com',
        subject: emailSubject,
        text: emailBody,
      });

      res
        .status(200)
        .json({ message: "E-mail enviado com sucesso!", response });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      res.status(500).json({ error: "Falha ao enviar o e-mail." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
