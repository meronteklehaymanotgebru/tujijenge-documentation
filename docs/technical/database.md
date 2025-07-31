# Database Schema

## Entity Relationship Diagram
![ERD](../images/erd-%20tujijenge_system.png)

## Core Tables

### users
| Column | Type | Description |
|--------|------|-------------|
| phone_number | VARCHAR(20) | Unique identifier |
| latitude | FLOAT | Location coordinate |
| longitude | FLOAT | Location coordinate |
| certified_status | VARCHAR(15) | Verification status |
| created_at | TIMESTAMP | Account creation date |
| is_active | BOOLEAN | Account status |

### Community
| Column | Type | Description |
|--------|------|-------------|
| name | VARCHAR(255) | Community name |
| description | TEXT | Community description |
| latitude | FLOAT | Location coordinate |
| longitude | FLOAT | Location coordinate |
| created_by | VARCHAR(5) | Mama Mboga creator (FK) |

### Orders
| Column | Type | Description |
|--------|------|-------------|
| community_id | VARCHAR(5) | Community (FK) |
| total_price | NUMERIC(10,2) | Order total |
| deadline_at | TIMESTAMP | Order deadline |
| order_date | TIMESTAMP | Order creation date |
| updated_date | TIMESTAMP | Last update date |

### Stock
| Column | Type | Description |
|--------|------|-------------|
| mamamboga_id | VARCHAR(5) | Mama Mboga (FK) |
| product_id | VARCHAR(5) | Product (FK) |
| quantity | NUMERIC(10,2) | Current quantity |
| expiration_date | TIMESTAMP | Expiry date |
| last_updated | TIMESTAMP | Last update date |

### TrainingSessions
| Column | Type | Description |
|--------|------|-------------|
| title | VARCHAR(255) | Session title |
| description | TEXT | Session description |
| start_date | TIMESTAMP | Start date |
| end_date | TIMESTAMP | End date |
| is_cancelled | BOOLEAN | Cancellation status |

## Key Relationships
- A Mama Mboga can have multiple stock items
- A Mama Mboga can belong to multiple communities
- A community can have multiple Mama Mbogas
- An order belongs to a community and can have multiple products
- A payment is linked to an order
- A training session can have multiple registrations