# Technical Architecture

## System Architecture Diagram
![Tujijenge System Architecture](../images/Tujijenge%20DAS.pdf)

## Architecture Overview
The Tujijenge platform follows a microservices-inspired architecture with clear separation of concerns:
┌─────────────┐ ┌──────────────┐ ┌─────────────┐
│ React │────▶│ Heroku │────▶│ Django │
│ Frontend │ │ Router │ │ Backend │
└─────────────┘ └──────────────┘ └─────────────┘
│
▼
┌─────────────┐ ┌──────────────┐ ┌─────────────┐
│ Google │ │ Heroku │ │ PostgreSQL │
│ Maps │────▶ Add-ons │────▶ Database │
│ API │ │ (Logging, etc)│ └─────────────┘
└─────────────┘ └──────────────┘ │
▼
┌─────────────┐
│ M-Pesa │
│ API │


## Components

### Frontend Layer
- **Technology**: React 18+ with Redux Toolkit
- **Hosting**: Heroku dyno with static build
- **Key Features**:
  - Responsive mobile-first design
  - Real-time notifications
  - Location services integration
  - Offline capability for training materials

### Backend Layer
- **Technology**: Django 4.2 with REST Framework
- **Hosting**: Heroku worker dynos
- **Key Services**:
  - Authentication service (JWT-based)
  - Stock management service
  - Order processing service
  - Training management service
  - Payment processing service

### Data Layer
- **Database**: PostgreSQL 15 (Heroku Postgres)
- **Caching**: Redis (Heroku Redis)
- **File Storage**: AWS S3 (Heroku Bucketeer add-on)
- **Backups**: Automated daily backups (Heroku PG Backups)

### External Integrations
- **M-Pesa Daraja API**: Payment processing
  - STK Push for initiating payments
  - Callback webhook for confirmations
- **Google Maps API**: Location services
  - Reverse geocoding for addresses
  - Distance calculation between users and suppliers

## Security Architecture


## Security Implementation
- **Authentication**: JWT tokens with 15-minute expiration
- **Authorization**: Role-based access control (RBAC) with 3 permission levels
- **Data Protection**:
  - AES-256 encryption for sensitive data at rest
  - TLS 1.3 for all communications
  - Heroku's automatic SSL certificate management
- **API Security**:
  - Request signing for external API calls
  - Rate limiting (100 requests/minute per user)
  - Input validation and sanitization

## Scalability Considerations
- **Heroku Dynos**: Auto-scaling based on load
- **Database**: Connection pooling with PgBouncer
- **Caching**: Redis for session storage and frequent queries
- **CDN**: Cloudflare for static assets