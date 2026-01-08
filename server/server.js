import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

console.log('Environment variables loaded:');
console.log('- PORT:', PORT);
console.log('- EMAIL_SERVICE:', process.env.EMAIL_SERVICE || 'gmail');
console.log('- EMAIL_USER:', process.env.EMAIL_USER ? '***configured***' : 'NOT SET');
console.log('- EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***configured***' : 'NOT SET');
console.log('- RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL || 'info@fas-tradingest.com');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/send-email', async (req, res) => {
  console.log('Email request received:', { name: req.body.name, email: req.body.email });

  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    console.log('Validation failed - missing fields');
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL || 'info@fas-tradingest.com',
    replyTo: email,
    subject: `New Business Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">New Business Inquiry</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0;">FAS Trading & Establishment</p>
        </div>

        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #059669; margin-top: 0;">Contact Information</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
          </table>

          <h2 style="color: #059669; margin-top: 30px;">Message</h2>
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 5px; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="background: #1f2937; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">This email was sent from the FAS Trading & Establishment website contact form</p>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Please respond directly to: ${email}</p>
        </div>
      </div>
    `,
    text: `
New Business Inquiry from FAS Trading & Establishment Website

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

---
Please respond directly to: ${email}
    `
  };

  try {
    console.log('Attempting to send email to:', process.env.RECIPIENT_EMAIL || 'info@fas-tradingest.com');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.response);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email. Please try again later.'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
