// ============================================================
// Yummy — shared data for all pages
// ============================================================
const IMGDIR = "assets/img/";
const S = (n) => IMGDIR + "starter-" + n + ".png";

const MENU = {
  starters: [
    { name: "Bruschetta Classico", desc: "Toasted sourdough, vine tomato, basil, olive oil", price: "$5.95", img: S(1) },
    { name: "Crispy Calamari", desc: "Lightly fried squid, lemon aioli, sea salt", price: "$9.95", img: S(2) },
    { name: "Stuffed Mushrooms", desc: "Garlic, herbs, parmesan, breadcrumb crust", price: "$8.50", img: S(3) },
    { name: "Caprese Skewers", desc: "Mozzarella, cherry tomato, basil, balsamic", price: "$7.95", img: S(4) },
    { name: "Soup of the Day", desc: "Chef's daily creation, served with warm bread", price: "$6.50", img: S(5) },
    { name: "Garlic Prawns", desc: "Pan-seared prawns, chilli, garlic butter", price: "$11.95", img: S(6) },
  ],
  breakfast: [
    { name: "Scrambled Eggs", desc: "Free-range eggs, butter, chives, sourdough", price: "$6.95", img: S(2) },
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, chilli, lemon", price: "$8.95", img: S(4) },
    { name: "Buttermilk Pancakes", desc: "Stacked pancakes, berries, maple syrup", price: "$7.95", img: S(1) },
    { name: "Granola Bowl", desc: "Oats, honey, seasonal fruit, yogurt, almonds", price: "$9.95", img: S(5) },
    { name: "Omelette Du Chef", desc: "Eggs, mushroom, cheese, peppers, herbs", price: "$11.95", img: S(3) },
    { name: "Morning Bagel", desc: "Bagel, cream cheese, smoked salmon, capers", price: "$10.95", img: S(6) },
  ],
  lunch: [
    { name: "Caesar Salad", desc: "Romaine, croutons, parmesan, caesar dressing", price: "$10.95", img: S(4) },
    { name: "Grilled Chicken Wrap", desc: "Chicken, lettuce, tomato, garlic sauce", price: "$12.95", img: S(3) },
    { name: "Roasted Tomato Soup", desc: "Tomato, basil, cream, garlic, olive oil", price: "$7.95", img: S(5) },
    { name: "Tuna Penne", desc: "Penne, tuna, olives, capers, cherry tomato", price: "$13.95", img: S(2) },
    { name: "Garden Burger", desc: "Bean patty, lettuce, onion, house pickles", price: "$11.95", img: S(1) },
    { name: "Mushroom Risotto", desc: "Arborio rice, porcini, parmesan, white wine", price: "$14.95", img: S(6) },
  ],
  dinner: [
    { name: "Grilled Salmon", desc: "Salmon fillet, lemon butter, asparagus", price: "$22.95", img: S(6) },
    { name: "Beef Tenderloin", desc: "Tenderloin, red wine jus, mashed potato", price: "$28.95", img: S(2) },
    { name: "Herb Lamb Chops", desc: "Lamb, rosemary, garlic, roasted vegetables", price: "$26.95", img: S(3) },
    { name: "Seafood Linguine", desc: "Shrimp, mussels, white wine, chilli, herbs", price: "$24.95", img: S(4) },
    { name: "Duck Confit", desc: "Slow-cooked duck leg, orange glaze, gratin", price: "$27.95", img: S(5) },
    { name: "Truffle Chicken", desc: "Chicken breast, truffle cream, wild mushroom", price: "$23.95", img: S(1) },
  ],
};

const TESTIMONIALS = [
  { name: "Saul Goodman", job: "Entrepreneur", text: "Easily the best dinner we've had all year. Every plate was beautifully presented and full of flavour — we'll be back with the whole family.", img: IMGDIR + "testi-1.jpg" },
  { name: "Sara Wilsson", job: "Designer", text: "The atmosphere is warm and the service is genuinely thoughtful. The chef's tasting menu was a highlight of our trip to the city.", img: IMGDIR + "testi-2.jpg" },
  { name: "Jena Karlis", job: "Store Owner", text: "Fresh, seasonal ingredients you can actually taste. Yummy has become our go-to spot for celebrations and quiet weeknights alike.", img: IMGDIR + "testi-3.jpg" },
  { name: "Matt Brandon", job: "Freelancer", text: "From the first bite to the last, everything was flawless. Cosy interior, attentive staff and a menu that keeps surprising you.", img: IMGDIR + "testi-4.jpg" },
];

const EVENTS = [
  { title: "Birthday Parties", price: "$499", text: "Celebrate your special day with a private area, a custom menu and a dedicated team that takes care of every detail.", img: IMGDIR + "event-1.jpg" },
  { title: "Wedding Receptions", price: "$899", text: "Say 'I do' surrounded by elegant décor and a curated tasting menu designed together with our head chef.", img: IMGDIR + "event-2.jpg" },
  { title: "Custom Events", price: "$299", text: "Corporate dinners, anniversaries or intimate gatherings — tell us your vision and we'll craft the perfect evening.", img: IMGDIR + "event-3.jpg" },
];

const CHEFS = [
  { name: "Walter White", job: "Head Chef", text: "Twenty years of fine dining across three continents, with a passion for turning simple ingredients into something unforgettable.", img: IMGDIR + "chef-1.jpg" },
  { name: "Sarah Johnson", job: "Pastry Chef", text: "The mind behind our desserts — every plate is a small work of art, balancing texture, temperature and just the right sweetness.", img: IMGDIR + "chef-2.jpg" },
  { name: "William Anderson", job: "Sous Chef", text: "Keeps the kitchen running like clockwork and champions local, seasonal produce in every dish that leaves the pass.", img: IMGDIR + "chef-3.jpg" },
];

const GALLERY = [1, 2, 3, 4, 5, 6, 7].map((n) => IMGDIR + "gallery-" + n + ".jpg");
