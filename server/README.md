# FAS Trading & Establishment - Backend Server

Node.js backend server for handling contact form email submissions.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your email credentials:

```env
PORT=3001

EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

RECIPIENT_EMAIL=info@fas-tradingest.com
```

### 3. Gmail App Password Setup

If using Gmail:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password in `EMAIL_PASSWORD` (not your regular Gmail password)

### 4. Alternative Email Services

You can use other email services by changing `EMAIL_SERVICE`:

- `gmail` - Gmail
- `outlook` - Outlook/Hotmail
- `yahoo` - Yahoo Mail
- Or configure custom SMTP settings in `server.js`

### 5. Start the Server

Development mode (auto-restart on changes):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/send-email

Sends an email with the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+966 12 345 6789",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Testing

Test the email endpoint:

```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+966123456789",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## Troubleshooting

**Email not sending:**
- Verify your email credentials are correct
- Check that 2FA is enabled and you're using an App Password
- Check server console for error messages
- Ensure your email provider allows less secure apps or SMTP access

**CORS errors:**
- Verify the frontend is running on the expected port
- Check CORS configuration in `server.js`

**Port already in use:**
- Change the PORT in `.env` file
- Update the API URL in the frontend ContactForm component
