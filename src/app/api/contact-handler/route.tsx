import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
import { NextResponse, NextRequest } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY);

// export function handler(req: NextApiRequest, res: NextApiResponse) {
export async function POST(request) {
  //   if (req.method === "POST") {
  const body = await request.json();
  const data = body;
  console.log("data:", data);
  console.log("data.name", data.name);

  if (!data.name || !data.email || !data.subject || !data.message) {
    return NextResponse.json({ error: "Invalid requestttt" }, { status: 400 });
  }

  const message = `
  Name : ${data.name}\r\n
  Email: ${data.email}\r\n
  Subject: ${data.subject}\r\n
  Message: ${data.message}
  `;

  // console.log("message", message);

  const details = {
    to: "dxnielodu@gmail.com",
    from: "danielodu@hotmail.com",
    subject: "New Portfolio Contact",
    text: message,
    html: `<p><strong>Name: </strong>${data.name}</p>
      <p><strong>Email: </strong>${data.email}</p>
      <p><strong>Subject: </strong>${data.subject}</p>
      <p><strong>Message: </strong>${data.message}</p>`,
    // html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(details);
  //   }

  //   return res.status(200).json({ status: "ok" });
  return NextResponse.json({ message: "OK" }, { status: 200 });
}
