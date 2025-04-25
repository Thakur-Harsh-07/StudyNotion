# StudyNotion - E-Learning Platform

StudyNotion is a comprehensive e-learning platform that enables seamless course creation, enrollment, and learning experiences.

## Features

- User Authentication and Authorization
- Course Creation and Management
- Payment Integration with Razorpay
- Course Enrollment and Progress Tracking
- Profile Management
- Rating and Review System
- Contact Support

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay
- **File Storage**: Cloudinary
- **Email Service**: Nodemailer

## Prerequisites

Before running this application, make sure you have:

- Node.js installed
- MongoDB installed and running
- Razorpay account for payment processing
- Cloudinary account for file storage
- SMTP credentials for email functionality

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=4000
MONGODB_URL=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret

# Razorpay Configuration
RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# SMTP Configuration
MAIL_HOST=your_smtp_host
MAIL_USER=your_smtp_username
MAIL_PASS=your_smtp_password
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/studynotion.git
```

2. Install dependencies for backend:
```bash
cd server
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The server will start running on http://localhost:4000

## API Endpoints

### Authentication
- POST `/api/v1/auth/sendotp` - Send OTP for verification
- POST `/api/v1/auth/signup` - Register new user
- POST `/api/v1/auth/login` - User login
- POST `/api/v1/auth/reset-password-token` - Request password reset
- POST `/api/v1/auth/reset-password` - Reset password

### Courses
- GET `/api/v1/course/getAllCourses` - Get all courses
- GET `/api/v1/course/getCourseDetails` - Get specific course details
- POST `/api/v1/course/createCourse` - Create new course
- PUT `/api/v1/course/editCourse` - Edit existing course
- DELETE `/api/v1/course/deleteCourse` - Delete course

### Payments
- POST `/api/v1/payment/capturePayment` - Initialize payment
- POST `/api/v1/payment/verifyPayment` - Verify payment
- POST `/api/v1/payment/sendPaymentSuccessEmail` - Send payment confirmation

## Deployment

 The URL is:
```
https://studynotion-frontend-three-phi.vercel.app/
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

