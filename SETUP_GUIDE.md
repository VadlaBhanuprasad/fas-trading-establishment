# Setup Guide - FAS Trading & Establishment

Complete setup guide to get your website running with email functionality.

## Prerequisites

- Node.js 18+ installed
- Gmail account (or other email provider)
- Terminal/Command Prompt access

## Step-by-Step Setup

### Step 1: Install Dependencies

```bash
npm install
cd server
npm install
cd ..
```

### Step 2: Configure Email Service

#### For Gmail Users:

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password

3. **Create Environment File**
   ```bash
   cd server
   cp .env.example .env
   ```

4. **Edit server/.env**
   ```env
   PORT=3001
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   RECIPIENT_EMAIL=info@fas-tradingest.com
   ```

#### For Other Email Providers:

**Outlook/Hotmail:**
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

**Yahoo:**
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

**Custom SMTP:**
Edit `server/server.js` and replace the transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

### Step 3: Run the Application

#### Option A: Use Startup Script (Recommended)

**Linux/Mac:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

#### Option B: Manual Start (Two Terminals)

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 4: Access the Website

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Step 5: Test the Contact Form

1. Open http://localhost:5173 in your browser
2. Scroll to the "Contact" section
3. Fill out the form
4. Click "Send Message"
5. Check for success message
6. Verify email received at recipient address

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

3. Update API URL in production:
   - Edit `src/components/ContactForm.tsx`
   - Change `http://localhost:3001` to your production backend URL

### Backend Deployment (Heroku/Railway/VPS)

1. Choose a hosting platform:
   - Railway: https://railway.app
   - Heroku: https://heroku.com
   - DigitalOcean: https://digitalocean.com
   - Any VPS with Node.js support

2. Set environment variables on the platform:
   ```
   PORT=3001
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=info@fas-tradingest.com
   ```

3. Deploy the `server` directory

4. Update frontend to use production backend URL

## Troubleshooting

### Issue: "EAUTH" Error When Sending Email

**Solution:**
- Using Gmail App Password (not regular password)
- 2FA is enabled on your Google account
- App Password is correctly copied (no spaces)

### Issue: "Network Error" in Contact Form

**Solution:**
- Backend server is running on port 3001
- Check terminal for backend errors
- Verify API URL in ContactForm.tsx

### Issue: Email Goes to Spam

**Solution:**
- Add sender email to contacts
- Check spam folder
- Consider using a professional email service (SendGrid, AWS SES) for production

### Issue: Port Already in Use

**Solution:**
- Kill process using the port:
  ```bash
  # Linux/Mac
  lsof -ti:3001 | xargs kill -9

  # Windows
  netstat -ano | findstr :3001
  taskkill /PID [PID] /F
  ```
- Or change port in `server/.env`

## Security Notes

- Never commit `.env` files to version control
- Use App Passwords, not regular passwords
- For production, use environment variables on hosting platform
- Consider rate limiting for production deployment
- Use HTTPS in production

## Support

For issues or questions:
- Email: info@fas-tradingest.com
- Phone: +966 56 536 3194

## Next Steps

1. Customize email template in `server/server.js`
2. Add your logo to email notifications
3. Set up email tracking (optional)
4. Configure email analytics (optional)
5. Add CAPTCHA for spam protection (optional)
