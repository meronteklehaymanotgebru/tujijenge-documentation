

```markdown
# Troubleshooting Guide

## Common Issues

### Database Connection Errors
**Symptoms**: Unable to connect to database
**Solutions**:
- Check DATABASE_URL environment variable
- Verify Heroku Postgres is running
- Check network connectivity

### M-Pesa Payment Failures
**Symptoms**: Payments not processing
**Solutions**:
- Verify M-Pesa API credentials
- Check callback URL accessibility
- Review M-Pesa API status

### Authentication Issues
**Symptoms**: Users can't log in
**Solutions**:
- Verify JWT token configuration
- Check user credentials in database
- Ensure authentication endpoints are accessible

### Location Service Errors
**Symptoms**: Google Maps API not working
**Solutions**:
- Verify API key is valid and has correct permissions
- Check API key restrictions in Google Cloud Console


## How to Check Logs
```bash
heroku logs --tail --app tujijenge-prod