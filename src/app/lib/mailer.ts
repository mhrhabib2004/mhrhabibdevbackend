import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ name, email, message }: { name: string; email: string; message: string }) => {
  await transporter.sendMail({
    from: email,
    to: process.env.TO_EMAIL,
    subject: `New message from ${name}`,
    html: `
      <h3>Name: ${name}</h3>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  });
};
