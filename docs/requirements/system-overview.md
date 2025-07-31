# System Requirements

## Core Functionality
- **Stock Management**: Real-time inventory tracking with alerts
- **Order Management**: Community-based bulk ordering
- **Training**: GAIN hygiene training delivery and verification
- **Payments**: M-Pesa integration for secure transactions
- **Geocoding**: Location services via Google Maps API

## User Roles
| Role         | Key Capabilities                          | Restrictions                     |
|--------------|------------------------------------------|----------------------------------|
| Mama Mboga   | Stock mgmt, orders, training, payments    | Only own data                    |
| GAIN         | Training mgmt, verification                | No financial/order access         |
| Taimba       | Catalog mgmt, order processing             | No training access               |

## Technology Stack
- **Frontend**: React 18+
- **Backend**: Django 4.2
- **Database**: PostgreSQL 15
- **Hosting**: Heroku
- **External APIs**: M-Pesa Daraja, Google Maps