# Feature Detail: Reliable Verification (PoD)

## Overview
Trust is the currency of logistics. GoNow's "Proof of Delivery" (PoD) system is engineered to eliminate disputes, fraudulent claims, and accounting errors by capturing rich, watermarked metadata at the point of fulfillment.

## Core Capabilities

### 1. High-Performance Mobile Camera
- **Hardware Integration**: Full control over camera zoom (slider and pinch-to-zoom) and flash.
- **Gallery Support**: Option to upload high-quality photos from the device gallery for pre-taken documentation.
- **Optimized Uploads**: Photos are compressed and optimized on-device before transmission to minimize data usage and storage costs.

### 3. Smart Watermarking Engine
Every captured photo is automatically processed by an invisible marking engine that stamps critical data directly onto the image:
- **Store Name**: The specific customer entity name.
- **Precise Timestamp**: The exact time of the shutter press (aligned with server time).
- **Verified Coordinates**: GPS validation ensures the driver was actually at the customer location (validated but not printed for security).

### 4. Smart Coordinate Extraction
- **Zero-Manual Entry**: Managers can simply paste a full Google Maps URL into the customer profile.
- **Auto-Parsing**: The system automatically extracts the `@latitude,longitude` coordinates from the URL, preventing setup errors and saving time.

### 5. Compliance & Safeguards
- **3-Photo Limit**: Enforced compliance requiring up to 3 distinct photos per stop (e.g., Shelf view, Signed invoice, Outer facade).
- **Discard Protection**: Safety prompts prevent drivers from accidentally discarding captured proofs without saving.
- **Unsaved Changes Alarm**: The app warns users if they try to close an active delivery without submitting their photo proofs.

### 4. Hive-Style Storage Architecture
- **Organized Hierarchy**: Files are stored in Firebase following a strict folder convention: `/proofs/year=YYYY/month=MM/day=DD/routeId/`.
- **Easy Retrieval**: Search and retrieve specific photos instantly via the Reporting module or Firestore references.
- **Deep Cleanup Tools**: Admins can use "Recursive Cleanup" to bulk-delete older storage folders while maintaining data safety.
