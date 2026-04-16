# Feature Detail: Enterprise Management

## Overview
Built for reliability and scalability, GoNow's management layer ensures that your logistics infrastructure is secure, healthy, and easy to maintain.

## Core Capabilities

### 1. Robust RBAC (Role-Based Access Control)
Manage permissions with four distinct user roles:
- **Administrator**: Full system control including disaster recovery, backups, and user approval.
- **Manager**: Full access to routes, customers, and reporting modules.
- **Employee**: Focused interface for task execution and photo proof capture.
- **Viewer**: Read-only access for external auditors or stakeholder monitoring.

### 2. System Health & Heartbeat
- **Real-time Connectivity**: The "App Status" dashboard monitors active internet and Firebase Database heartbeats.
- **Infrastructure Tracking**: Integrated links to view Cloud Architecture usage, Storage quotas, and billing forecasts.
- **In-App Issue Reporting**: Integrated ticketing system for users to report bugs or request features directly to the development team.

### 3. Security Auditing
- **Login History Logs**: Detailed audit trail of every system access, including Platform (iOS/Android/Web), IP Address, and Browser information.
- **Success/Failure Tracking**: Monitor failed login attempts to detect unauthorized access patterns.
- **Reset Controls**: Admins can flush audit logs or force password resets for security compliance.

### 4. Cost Optimization & Maintenance
GoNow includes a unique suite of tools to keep cloud infrastructure costs at zero or near-zero:
- **Storage Analyzer**: Deep-scans the 'proofs' folder to report exact file counts and bucket size (bytes/GB).
- **Recursive Cleanup**: A 'Bulk Delete' tool that performs recursive cleaning of daily/monthly folders while preserving data links.
- **Emergency Upload Stop**: A "kill switch" for new photo uploads to prevent accidental over-billing during high-traffic periods.
- **Native Backups**: Admin-only snapshot capability for off-site data archival.

### 5. Disaster Recovery & Maintenance
- **Cloud Snapshots**: One-click creation of Firestore database snapshots.
- **Primary Reseed Engine**: A professional environment reset tool that uses industry-standard naming (Qatari/Indian pool) and authoritative reporting ratios (75% Delivered) to generate production-ready test environments instantly.
