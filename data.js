/**
 * Flower Shop Management System - Data & Initial Seed Database
 * Implements entities and relationships defined in the SE Project Report (Section 3.2 & 3.7)
 */

const SEED_DATA = {
    // 1. Categories (Section 3.7 Categories Entity)
    categories: [
        { category_id: 1, name: "Roses", description: "Fresh premium cut roses in vivid colors" },
        { category_id: 2, name: "Orchids", description: "Exotic and long-lasting phalaenopsis & dendrobium orchids" },
        { category_id: 3, name: "Lilies", description: "Fragrant Asiatic and Oriental lilies" },
        { category_id: 4, name: "Carnations", description: "Classic ruffled blossoms symbolizing affection and admiration" },
        { category_id: 5, name: "Tulips", description: "Imported Dutch tulips with vibrant cup-shaped petals" },
        { category_id: 6, name: "Mixed Bouquets", description: "Artisan hand-tied bouquets crafted for special occasions" }
    ],

    // 2. Suppliers (Section 3.7 Suppliers Entity)
    suppliers: [
        { supplier_id: 1, name: "FloraFarms Direct", contact: "+91 98765 11001", address: "Bengaluru Flower Valley, Karnataka", rating: 4.8 },
        { supplier_id: 2, name: "Himalayan Blooms Ltd.", contact: "+91 98765 22002", address: "Dehradun Nursery Estates, Uttarakhand", rating: 4.9 },
        { supplier_id: 3, name: "Dutch Floral Imports", contact: "+91 98765 33003", address: "Cargo Terminal 2, Mumbai International Airport", rating: 4.7 },
        { supplier_id: 4, name: "GreenValley Agro Floriculture", contact: "+91 98765 44004", address: "Ooty Hillside Farms, Tamil Nadu", rating: 4.6 }
    ],

    // 3. Flowers Catalog (Section 3.7 Flowers Entity)
    flowers: [
        {
            flower_id: 101,
            category_id: 1,
            supplier_id: 1,
            name: "Velvet Red Roses Bouquet",
            color: "Red",
            occasion: "Anniversary",
            price: 450,
            stock_qty: 24,
            min_stock_alert: 8,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
            description: "A dozen velvety long-stemmed red roses hand-tied in elegant black craft wrap with silk ribbon."
        },
        {
            flower_id: 102,
            category_id: 2,
            supplier_id: 2,
            name: "Royal Purple Orchid Bouquet",
            color: "Purple",
            occasion: "Celebration",
            price: 600,
            stock_qty: 15,
            min_stock_alert: 5,
            image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
            description: "Premium stems of Dendrobium purple orchids with rich green foliage and golden decorative mesh."
        },
        {
            flower_id: 103,
            category_id: 3,
            supplier_id: 4,
            name: "Pristine White Oriental Lilies",
            color: "White",
            occasion: "Wedding",
            price: 550,
            stock_qty: 12,
            min_stock_alert: 6,
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
            description: "Intensely fragrant white Oriental lilies accented with gypsophila and eucalyptus leaves."
        },
        {
            flower_id: 104,
            category_id: 1,
            supplier_id: 1,
            name: "Blush Pink Romance Roses",
            color: "Pink",
            occasion: "Birthday",
            price: 480,
            stock_qty: 18,
            min_stock_alert: 6,
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
            description: "Soft pastel pink roses paired with baby's breath, symbolizing grace, joy, and affection."
        },
        {
            flower_id: 105,
            category_id: 5,
            supplier_id: 3,
            name: "Dutch Sunshine Tulips",
            color: "Yellow",
            occasion: "Celebration",
            price: 700,
            stock_qty: 9, // low stock test
            min_stock_alert: 10,
            image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
            description: "Directly imported Netherlands yellow tulips representing cheerful thoughts and pure sunshine."
        },
        {
            flower_id: 106,
            category_id: 4,
            supplier_id: 4,
            name: "Crimson Carnation Bunch",
            color: "Red",
            occasion: "Sympathy",
            price: 350,
            stock_qty: 25,
            min_stock_alert: 8,
            image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
            description: "Long-lasting deep crimson carnations accented with seasonal greens and kraft packaging."
        },
        {
            flower_id: 107,
            category_id: 6,
            supplier_id: 1,
            name: "Pastel Meadow Mixed Arrangement",
            color: "Pink",
            occasion: "Anniversary",
            price: 850,
            stock_qty: 14,
            min_stock_alert: 5,
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=80",
            description: "A deluxe seasonal mix featuring pink roses, white lilies, snapdragons, and eucalyptus."
        },
        {
            flower_id: 108,
            category_id: 1,
            supplier_id: 1,
            name: "Golden Joy Yellow Roses",
            color: "Yellow",
            occasion: "Birthday",
            price: 420,
            stock_qty: 4, // Critical low stock for alerts
            min_stock_alert: 8,
            image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=600&q=80",
            description: "Bright yellow roses radiating friendship, warmth, and positivity in a stylish round box."
        }
    ],

    // 4. Users (Section 1.2, 3.2, 3.7 - Customers, Staff, Delivery, Admin)
    users: [
        {
            user_id: 1,
            name: "Ananya Sharma",
            email: "ananya@example.com",
            password: "password123",
            phone: "+91 98765 43210",
            role: "Customer",
            address: "42 Coral Heights, 12th Main, Indiranagar, Bengaluru - 560038",
            loyalty_points: 120
        },
        {
            user_id: 2,
            name: "Rahul Mehta",
            email: "rahul@example.com",
            password: "password123",
            phone: "+91 98111 22334",
            role: "Customer",
            address: "Flat 302, Green Glen Layout, Bellandur, Bengaluru - 560103",
            loyalty_points: 50
        },
        {
            user_id: 3,
            name: "Emma Florist (Lead Designer)",
            email: "staff@flowershop.com",
            password: "password123",
            phone: "+91 99000 11223",
            role: "Staff",
            staff_role: "Senior Florist & Order Supervisor"
        },
        {
            user_id: 4,
            name: "Alex Rider (Fast Courier)",
            email: "delivery@flowershop.com",
            password: "password123",
            phone: "+91 97444 55667",
            role: "DeliveryPerson",
            vehicle_no: "KA-03-EX-4099",
            area: "East & Central Bengaluru Zone"
        },
        {
            user_id: 5,
            name: "Sophia Admin (Store Director)",
            email: "admin@flowershop.com",
            password: "password123",
            phone: "+91 99888 77665",
            role: "Administrator",
            admin_level: "SuperAdmin"
        }
    ],

    // 5. Existing Seed Orders (Including the official Page 14 sample Order #1001)
    orders: [
        {
            order_id: 1001,
            customer_id: 1, // Ananya
            order_date: "2026-11-19T10:30:00",
            delivery_date: "2026-11-20",
            delivery_time_slot: "02:00 PM - 05:00 PM",
            delivery_address: "42 Coral Heights, 12th Main, Indiranagar, Bengaluru - 560038",
            status: "Out for Delivery", // Match page 14
            subtotal: 1500,
            delivery_charge: 50,
            discount: 100,
            total_amount: 1450,
            assigned_delivery_staff_id: 4, // Alex
            items: [
                {
                    item_id: 1,
                    flower_id: 101,
                    flower_name: "Velvet Red Roses Bouquet",
                    unit_price: 450,
                    quantity: 2,
                    subtotal: 900
                },
                {
                    item_id: 2,
                    flower_id: 102,
                    flower_name: "Royal Purple Orchid Bouquet",
                    unit_price: 600,
                    quantity: 1,
                    subtotal: 600
                }
            ],
            payment: {
                payment_id: "PAY-1001-RZP",
                method: "Razorpay / Online",
                amount: 1450,
                status: "Paid",
                paid_on: "2026-11-19T10:32:00"
            },
            delivery: {
                delivery_id: "DEL-1001",
                vehicle_no: "KA-03-EX-4099",
                status: "Out for Delivery",
                estimated_time: "Today by 4:30 PM",
                delivered_on: null
            }
        },
        {
            order_id: 1002,
            customer_id: 2, // Rahul
            order_date: "2026-11-20T09:15:00",
            delivery_date: "2026-11-21",
            delivery_time_slot: "10:00 AM - 01:00 PM",
            delivery_address: "Flat 302, Green Glen Layout, Bellandur, Bengaluru - 560103",
            status: "Preparing",
            subtotal: 700,
            delivery_charge: 50,
            discount: 0,
            total_amount: 750,
            assigned_delivery_staff_id: 4,
            items: [
                {
                    item_id: 3,
                    flower_id: 105,
                    flower_name: "Dutch Sunshine Tulips",
                    unit_price: 700,
                    quantity: 1,
                    subtotal: 700
                }
            ],
            payment: {
                payment_id: "PAY-1002-COD",
                method: "Cash on Delivery",
                amount: 750,
                status: "Pending",
                paid_on: null
            },
            delivery: {
                delivery_id: "DEL-1002",
                vehicle_no: "KA-03-EX-4099",
                status: "Scheduled",
                estimated_time: "Tomorrow by 11:30 AM",
                delivered_on: null
            }
        }
    ],

    // Available Promo Codes
    coupons: [
        { code: "FLOWER100", discount: 100, min_order: 1000, description: "Flat ₹100 off on orders above ₹1,000" },
        { code: "FESTIVE150", discount: 150, min_order: 1200, description: "Festive celebration ₹150 off on orders above ₹1,200" },
        { code: "WELCOME50", discount: 50, min_order: 400, description: "Welcome bonus ₹50 off on any flower order" }
    ]
};
