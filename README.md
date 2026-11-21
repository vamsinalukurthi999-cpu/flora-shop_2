# FloraFlow - Flower Shop Management System

A full-featured web application implementing the **Software Engineering Project Report** specification across all phases: **Communication, Planning, Modeling, Construction, Testing, and Deployment**.

---

## 🌸 Key System Highlights & Architecture

### 1. Role-Based Access Control (RBAC)
- **Customer (Ananya Sharma, Rahul Mehta)**:
  - Browse floral catalog with multi-facet filters: Category, Color, Occasion, and Price.
  - Interactive shopping cart with real-time stock reservation and checks.
  - Multi-method checkout: Razorpay Sandbox, PayPal Sandbox, Cash on Delivery (COD).
  - Promo code discounts (`FLOWER100`, `FESTIVE150`, `WELCOME50`).
  - Real-time Order Tracking Stepper (Figure 5 State Diagram: *In Cart &rarr; Order Placed &rarr; Payment Confirmed &rarr; Preparing &rarr; Out for Delivery &rarr; Delivered*).
  - Official Tax Invoice viewer matching Page 14 with print / PDF download.
- **Florist / Staff (Emma - Senior Florist)**:
  - Incoming order queue management.
  - Status progression (*Preparing &rarr; Ready for Delivery*).
  - Perishable stem stock monitor with dynamic low-stock alerts and one-click restock requests.
- **Delivery Person (Alex Rider - Courier)**:
  - Assigned delivery run list with customer contact, address details, and time slots.
  - Dispatch actions (*Start Delivery Run &rarr; Mark as Delivered*).
- **Administrator (Sophia Admin - Store Director)**:
  - Real-time business KPIs (Gross Revenue, Total Orders, Low-Stock alerts, Stem inventory).
  - Flower catalog CRUD (Add flower with custom images, edit pricing, delete).
  - Category and supplier relationship management.
  - Executive sales reports and category breakdown bar charts (Chart.js).

---

## 📋 Software Engineering Test Cases (Table 5 / Page 14)

The application features an **Automated SE Test Suite Lab** modal capable of executing all 12 test cases programmatically:

| Test ID | Test Case Scenario | Expected Result | Implementation Status |
| :--- | :--- | :--- | :--- |
| **TC01** | Enter valid username/password | Login successful | ✅ Automated & Verified |
| **TC02** | Enter invalid password | Error message | ✅ Automated & Verified |
| **TC03** | Add flower (admin) | Flower added to catalog | ✅ Automated & Verified |
| **TC04** | Search flowers by category | Matching flowers displayed | ✅ Automated & Verified |
| **TC05** | Add flower to cart | Cart updated with correct total | ✅ Automated & Verified |
| **TC06** | Order more than available stock | Out-of-stock message | ✅ Automated & Verified |
| **TC07** | Place order with valid payment | Order confirmed & invoice generated | ✅ Automated & Verified |
| **TC08** | Payment failure | Order not confirmed; error shown | ✅ Automated & Verified |
| **TC09** | Staff updates order status | Customer sees updated status | ✅ Automated & Verified |
| **TC10** | Delivery person marks delivered | Order status set to Delivered | ✅ Automated & Verified |
| **TC11** | Generate sales report | Report displayed | ✅ Automated & Verified |
| **TC12** | Unauthorized user accesses admin page | Access denied | ✅ Automated & Verified |

---

## 🚀 How to Run the Web Application

### Option 1: Direct Browser Launch
Open `index.html` directly in Google Chrome, Microsoft Edge, or any modern web browser:
```text
file:///C:/Users/Vamsi/.gemini/antigravity/scratch/flower-shop-management-system/index.html
```

### Option 2: Local HTTP Server (PowerShell)
In a PowerShell window inside the project directory:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
This automatically starts an HTTP server at `http://localhost:8080/` and launches your default browser.

---

## 📦 Project File Structure
```text
flower-shop-management-system/
├── index.html        # Single Page Application layout, navigation, and modal views
├── styles.css        # Luxury floral design system, responsive styles, print stylesheet
├── data.js           # Seed data (Categories, Flowers, Suppliers, Users, Seed Order #1001)
├── app.js            # Core engine (State management, RBAC, Cart calculation, Payment, TC01-TC12)
├── server.ps1        # Pure PowerShell zero-dependency HTTP server
└── README.md         # Full project documentation & verification guide
```
