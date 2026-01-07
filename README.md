# FAS Trading & Establishment Website

Modern industrial services website for FAS Trading & Establishment with integrated contact form and email functionality.

## Features

- Modern, responsive React frontend
- Node.js backend for email handling
- Contact form with real-time validation
- Animated UI components
- Mobile-friendly design
- Email notifications for new inquiries

## Project Structure

```
.
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── server/                # Backend Node.js server
│   ├── server.js          # Express server with email handling
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
└── package.json           # Frontend dependencies
```

## Quick Start

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 3. Configure Email Settings

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your email credentials:

```env
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
RECIPIENT_EMAIL=info@fas-tradingest.com
```

For Gmail, you need to:
1. Enable 2-Factor Authentication
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Use the App Password in the `EMAIL_PASSWORD` field

### 4. Run the Application

**Option A: Run Both Servers Separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd server
npm run dev
```

**Option B: Run Backend in Background**

```bash
cd server && npm start &
cd .. && npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:3001`

## Development

### Frontend Development

The frontend is built with:
- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

To make changes to the frontend:
1. Edit files in the `src` directory
2. Changes will hot-reload automatically

### Backend Development

The backend uses:
- Express.js
- Nodemailer
- CORS

To make changes to the backend:
1. Edit `server/server.js`
2. The server will auto-restart (when using `npm run dev`)

## Building for Production

### Build Frontend

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy Backend

The backend can be deployed to any Node.js hosting service:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS EC2
- VPS

Make sure to:
1. Set environment variables on your hosting platform
2. Update the API URL in `src/components/ContactForm.tsx` to your production backend URL

## Environment Variables

### Backend (.env in server directory)

- `PORT` - Server port (default: 3001)
- `EMAIL_SERVICE` - Email service provider (gmail, outlook, yahoo)
- `EMAIL_USER` - Your email address
- `EMAIL_PASSWORD` - Your email app password
- `RECIPIENT_EMAIL` - Email address to receive contact form submissions

## Testing the Contact Form

1. Fill out all fields in the contact form
2. Click "Send Message"
3. Check for success/error message
4. Verify email was received at the recipient address

## Troubleshooting

### Frontend can't connect to backend
- Ensure backend server is running on port 3001
- Check browser console for CORS errors
- Verify the API URL in ContactForm.tsx matches your backend URL

### Emails not sending
- Verify email credentials in server/.env
- Check server console for error messages
- Ensure 2FA is enabled and using App Password (for Gmail)
- Check spam folder for received emails

### Port conflicts
- Change frontend port: `npm run dev -- --port 3000`
- Change backend port: Edit `PORT` in server/.env

## License

Copyright © 2024 FAS Trading & Establishment. All rights reserved.
