# SHACKLES 2025 - National Level Symposium Website
## Mechanical Engineering Association, ACGCET Karaikudi

### 🎯 Project Overview
A comprehensive MERN stack web application for managing SHACKLES symposium with Squid Game theme, featuring automated registration, payment verification, QR code generation, attendance tracking, and admin management.

---

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Caching**: Redis
- **Cloud**: AWS Free Tier (EC2, S3, SES, RDS)
- **DevOps**: Docker, Kubernetes, Jenkins
- **Security**: JWT, Bcrypt, Helmet, Rate Limiting

### Key Features
✅ Mobile-first responsive design
✅ Automated email confirmation system
✅ QR code generation for participants
✅ Real-time attendance tracking synced with Google Sheets
✅ Admin dashboard for event organizers
✅ Payment proof verification system
✅ Excel & PDF export functionality
✅ Secure authentication with password hashing
✅ Rate limiting & DDoS protection

---

## 📅 Event Details

**Dates**: October 23-24, 2025
**Venue**: ACGCET, Karaikudi

### Events

#### Technical Events (Square Symbol ■)
1. Paper Presentation - Mogith (6374763740)
2. Technical Quiz - Jeffery Shakil (8778531340)
3. CAD Modelling - Kumaran (9940518112)
4. Water Rocketry - Muthuvel (7904876985)
5. Motor Montage - Hariprasath (9626583898)
6. Mech O Mania - Anees Ahamed (9486213899)

#### Non-Technical Events (Circle Symbol ○)
1. IPL Auction - Sivash (9360462604)
2. Kollywood Quiz - Illakiya Rajan Kalai (9360644238)
3. Red Light Green Light - Tharun Raj (6369516359)

#### Special Events (Triangle Symbol △)
1. Idea Pitching - Vignesh (9787537488)
2. Robo Soccer - Shyam Sundar (8072372844)

### Workshops
1. **Additive Manufacturing** - 10:00 AM - 1:00 PM, Oct 23
2. **IoT Workshop** - 2:00 PM - 5:00 PM, Oct 23
- **Combined Fee**: ₹199

### Registration Fees
- Events Only: ₹299
- Workshops Only: ₹199
- Combined Package: ₹499

---

## 🚀 Quick Start Commands

```powershell
# Navigate to project root
cd "c:\Mechanical Association\Year 2025 - 2026\Website\shackles-symposium"

# Install frontend dependencies
cd frontend
npm install
npm run dev

# Install backend dependencies (in new terminal)
cd backend
npm install
npm run dev

# Run with Docker
docker-compose up --build

# Run in production
docker-compose -f docker-compose.prod.yml up -d
```

---

## 📦 Installation Steps

### 1. Install Dependencies

```powershell
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 2. Environment Variables

Create `.env` files:

#### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

#### Backend `.env`
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/shackles
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_REFRESH_SECRET=your_refresh_token_secret_key
JWT_EXPIRE=24h
JWT_REFRESH_EXPIRE=7d

# AWS
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=ap-south-1
AWS_S3_BUCKET=shackles-payments
AWS_SES_EMAIL=mechanicalassociation.acgcet@gmail.com

# Google Sheets
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
GOOGLE_SHEET_ID=your_sheet_id

# Payment
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mechanicalassociation.acgcet@gmail.com
SMTP_PASS=your_app_password

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### 3. Run Development Servers

```powershell
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev

# Terminal 3 - MongoDB (if local)
mongod

# Terminal 4 - Redis (if local)
redis-server
```

---

## 🎨 Design System

### Colors
- **Guard Pink**: `#E31B6C` - Primary (titles, buttons)
- **Player Green**: `#0AD7A1` - Secondary (headings, accents)
- **VIP Gold**: `#FFBF00` - Accent (highlights, prizes)
- **Neutral White**: `#FFFFFF` - Text on dark
- **Neutral Black**: `#000000` - Backgrounds

### Typography
- **Titles**: GameOfSquids (custom font)
- **Headings**: Orbitron
- **Body**: Rajdhani

### Responsive Breakpoints
```css
/* Mobile First */
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--large: 1440px;
```

---

## 📱 Pages Structure

1. **Home** - Hero, countdown, about section
2. **Events** - Technical, Non-Technical, Special (with symbols)
3. **Workshops** - Additive Manufacturing & IoT
4. **Accommodation** - Booking and rules
5. **Team** - Association members with LinkedIn
6. **Contact** - Google Maps, contact info
7. **Login/Register** - Authentication with email verification
8. **Profile** - User details, QR code, registered events
9. **Admin Dashboard** - Event management, payment verification, QR scanner

---

## 🔐 Security Features

- Bcrypt password hashing (12 rounds)
- JWT with refresh tokens
- Rate limiting (100 requests/15 min)
- Helmet.js security headers
- CORS configuration
- Input validation & sanitization
- SQL injection prevention
- XSS protection
- File upload validation
- Secure cookie handling

---

## 🛠️ API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

### Events
```
GET    /api/events
GET    /api/events/:id
POST   /api/events/register
GET    /api/events/my-registrations
```

### Admin
```
GET    /api/admin/registrations
PUT    /api/admin/verify-payment/:id
GET    /api/admin/export/excel/:eventId
GET    /api/admin/export/pdf/:eventId
POST   /api/admin/scan-qr
GET    /api/admin/attendance/:eventId
```

---

## 🐳 Docker Deployment

```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://backend:5000/api
  
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/shackles
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis
  
  mongo:
    image: mongo:7
    volumes:
      - mongo-data:/data/db
  
  redis:
    image: redis:7-alpine

volumes:
  mongo-data:
```

---

## ☁️ AWS Deployment Guide

### Services Used (Free Tier)
1. **EC2** - t2.micro instance for hosting
2. **S3** - Payment proof storage
3. **SES** - Email notifications
4. **RDS** - MongoDB Atlas (free tier)
5. **CloudFront** - CDN for static assets

### Deployment Steps
```bash
# 1. SSH into EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# 2. Clone repository
git clone https://github.com/yourusername/shackles-symposium.git

# 3. Run deployment script
cd shackles-symposium
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

---

## 📊 Database Schema

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique, indexed),
  password: String (hashed),
  mobile: String,
  college: String,
  department: String,
  year: Number,
  location: String,
  referralCode: String,
  role: ['user', 'admin', 'organizer'],
  uniqueId: String (auto-generated),
  qrCode: String (base64),
  isVerified: Boolean,
  registeredEvents: [EventId],
  registeredWorkshops: [WorkshopId],
  packageType: ['events', 'workshops', 'both'],
  paymentProof: String (S3 URL),
  transactionId: String,
  isPaymentVerified: Boolean,
  createdAt: Date
}
```

---

## 🔄 Automated Workflows

### Registration Flow
1. User fills registration form
2. Selects package type
3. Uploads payment proof
4. Admin verifies payment
5. System generates unique ID & QR code
6. Confirmation email sent with QR code
7. User can view in profile

### Attendance Flow
1. Organizer scans participant QR
2. System marks attendance
3. Data syncs to Google Sheets
4. Real-time dashboard update

---

## 📞 Contact Information

**General Inquiries**:
- Killivalavan S - 6382853114
- Abirami N - 6381700049

**Event Queries**:
- Prabhuvelsundhar R - 9600463229
- Sakthivel K - 9342034079

**Technical Assistance**:
- Harish J - 7305432775

**Email**: mechanicalassociation.acgcet@gmail.com

---

## 📄 License
© 2025 Mechanical Engineering Association, ACGCET Karaikudi

---

## 🤝 Contributing
Built by the MEA Web Team for SHACKLES 2025

**Developed by**: Mechanical Engineering Association, ACGCET
