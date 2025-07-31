# Technical Architecture

## System Architecture Diagram
 ![Tujijenge System Architecture](../images/Screenshot%20from%202025-07-31%2019-42-35.png)

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
- **Frontend**: React with Redux
- **Backend**: Django REST Framework
- **Database**: PostgreSQL
- **External APIs**: M-Pesa, Google Maps

## Security
- **Authentication**: JWT tokens
- **Authorization**: Role-based access control
- **Data Protection**: Encryption at rest and in transit