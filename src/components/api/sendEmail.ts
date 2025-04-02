import { NextApiRequest, NextApiResponse } from 'next/dist/types';

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message }: RequestBody = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,  
      to: 'carol2015bortolini@gmail.com',
      subject: `Nova mensagem de ${name}`,
      text: `Mensagem de: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao enviar o e-mail.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}

