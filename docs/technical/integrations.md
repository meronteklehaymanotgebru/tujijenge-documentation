
### 6. `docs/technical/integrations.md`
```markdown
# External Integrations

## M-Pesa Daraja API
### Purpose
Process mobile payments for orders

### Key Endpoints
- **STK Push**: `https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest`
- **Transaction Status**: `https://api.safaricom.co.ke/mpesa/transactionstatus/v1/query`
- **Callback URL**: `{BASE_URL}/payments/mpesa/callback/`

### Authentication
OAuth 2.0 with consumer key and secret

### Implementation Notes
- Use sandbox for testing: `https://sandbox.safaricom.co.ke`
- Production requires security audit approval
- All requests must be signed

## Google Maps API
### Purpose
Location services for geocoding and distance calculation

### Key Endpoints
- **Geocoding**: `https://maps.googleapis.com/maps/api/geocode/json`
- **Distance Matrix**: `https://maps.googleapis.com/maps/api/distancematrix/json`

### Authentication
API key passed as query parameter

### Implementation Notes
- Enable Geocoding API and Distance Matrix API in Google Cloud Console
- Set up API key restrictions
- Monitor usage quotas and billing

## Security Considerations
- All API keys stored as environment variables
- Requests signed where required
- Rate limiting implemented (100 requests/minute per user)
- Error handling for API failures