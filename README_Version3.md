# Memezy

Multi-language meme t-shirt e-commerce platform.

## Features

- User registration/login
- Admin panel (add t-shirts)
- Multi-language meme t-shirt listings
- User profile
- OTP verification flow (UI ready, backend to be plugged in later)

## Quick Start

1. Clone this repo or upload to Replit/Glitch/Railway/Render.
2. Install dependencies: `npm install`
3. Create a `.env` file (see `.env.example`).
4. Start the app: `npm start`
5. Go to `/register` to create your first user.
6. Set the first admin user directly in MongoDB (update `role` to `admin`).

## How to deploy for free

- [Replit](https://replit.com/)
- [Glitch](https://glitch.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/free)

## What’s next?

- Implement OTP email sending/verification in `/otp` route.
- Add payment gateway.
- Add order/cart logic.