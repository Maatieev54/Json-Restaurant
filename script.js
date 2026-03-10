

function toggleMobile() {
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileOverlay');

  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    nav.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeMobile() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('mobileOverlay').classList.remove('open');
}

function toggleMobileDropdown(e) {
  e.preventDefault();
  document.getElementById('mobileDropdown').classList.toggle('open');
}




window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  checkCounters();
  updateActiveNav();
  checkBackTop();
});




function updateActiveNav() {
  const sections = ['home', 'about', 'menu', 'events', 'chefs', 'gallery', 'contact'];
  let current = '';

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= 120) {
      current = id;
    }
  });

  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}




function checkBackTop() {
  const btn = document.getElementById('backTop');
  if (window.scrollY > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}




function switchTab(clickedButton, tabId) {
  const buttons = document.getElementsByClassName('menu-tab');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  const tabs = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    tabs[i].classList.remove('tab-animate');
  }

  clickedButton.classList.add('active');

  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'grid';
  setTimeout(() => {
    selectedTab.classList.add('tab-animate');
  }, 10);

  const titles = {
    starters: 'Starters',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner'
  };
  document.getElementById('menuBigTitle').innerHTML = titles[tabId];
}




let counterStarted = false;

function checkCounters() {
  const stats = document.getElementById('stats');
  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight - 100 && counterStarted === false) {
    counterStarted = true;
    startCounters();
  }
}

function startCounters() {
  const counters = [
    { id: 'counter1', target: 232, step: 3 },
    { id: 'counter2', target: 521, step: 6 },
    { id: 'counter3', target: 1453, step: 18 },
    { id: 'counter4', target: 32, step: 1 }
  ];

  counters.forEach(counter => {
    const el = document.getElementById(counter.id);
    let num = 0;

    const timer = setInterval(() => {
      num += counter.step;
      if (num >= counter.target) {
        num = counter.target;
        clearInterval(timer);
      }
      el.innerHTML = num;
    }, 30);
  });
}




const startersfood = [
  { name: "Magnam Tiste", desc: "Lorem, deren, trataro, filede, nerada", price: "$5.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-1.png" },
  { name: "Aut Luia", desc: "Lorem, deren, trataro, filede, nerada", price: "$14.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-2.png" },
  { name: "Est Eligendi", desc: "Lorem, deren, trataro, filede, nerada", price: "$8.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-3.png" },
  { name: "Eos Luibusdam", desc: "Lorem, deren, trataro, filede, nerada", price: "$12.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-4.png" },
  { name: "Eos Luibusdam", desc: "Lorem, deren, trataro, filede, nerada", price: "$12.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-5.png" },
  { name: "Laboriosam Direva", desc: "Lorem, deren, trataro, filede, nerada", price: "$9.95", img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-6.png" }
];

const breakfastfood = [
  { name: "Scrambled Eggs", desc: "Eggs, butter, cream, chives, sea salt", price: "$6.95", img: "https://safyfalafel.ca/wp-content/uploads/2024/08/Scrambled-eggs-with-mozzarella-cheese-2-eggs.png" },
  { name: "Avocado Toast", desc: "Sourdough, avocado, chili flakes, lemon", price: "$8.95", img: "https://jow.fr/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FcO0ybhI5FIGP7w.png&w=2560&q=100" },
  { name: "French Pancakes", desc: "Flour, eggs, milk, vanilla, maple syrup", price: "$7.95", img: "https://png.pngtree.com/png-vector/20250623/ourmid/pngtree-stack-of-thin-crepes-with-berries-png-image_16579324.png" },
  { name: "Granola Bowl", desc: "Oats, honey, berries, yogurt, almonds", price: "$9.95", img: "https://static.vecteezy.com/system/resources/previews/059/473/387/non_2x/granola-bowl-with-fresh-fruits-blueberries-raspberries-mango-kiwi-and-strawberries-free-png.png" },
  { name: "Omelette Du Chef", desc: "Eggs, mushrooms, cheese, peppers, herbs", price: "$11.95", img: "https://static.jow.fr/880x880/recipes/NRZPwOaoVrjl0w.png" },
  { name: "Morning Bagel", desc: "Bagel, cream cheese, salmon, capers", price: "$10.95", img: "https://greenplanetcourt.com/wp-content/uploads/5-BAGEL.png" }
];

const lunchfood = [
  { name: "Caesar Salad", desc: "Romaine, croutons, parmesan, caesar dressing", price: "$10.95", img: "https://leankitchenco.com/wp-content/uploads/2025/10/Chicken-Caesar-Salad-scaled.webp" },
  { name: "Grilled Chicken Wrap", desc: "Chicken, lettuce, tomato, garlic sauce", price: "$12.95", img: "https://boosterjuice.com/cdn/shop/files/Ritual-GrilledFresh-ChipotleChickenWrap.png?v=1720986061&width=1946" },
  { name: "Tomato Soup", desc: "Tomatoes, basil, cream, garlic, olive oil", price: "$7.95", img: "https://png.pngtree.com/png-clipart/20241125/original/pngtree-creamy-tomato-soup-png-image_17308614.png" },
  { name: "Tuna Pasta", desc: "Penne, tuna, olives, capers, cherry tomato", price: "$13.95", img: "https://jow.com/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FrJhZyBgf1i.png&w=2560&q=100" },
  { name: "Veggie Burger", desc: "Black bean patty, lettuce, onion, pickles", price: "$11.95", img: "https://burgerking.com.cy/sites/default/files/Veggie%20Burger-01_1.png" },
  { name: "Mushroom Risotto", desc: "Arborio rice, porcini, parmesan, white wine", price: "$14.95", img: "https://static.vecteezy.com/system/resources/previews/067/823/203/non_2x/creamy-mushroom-risotto-recipe-gourmet-italian-dish-with-thyme-png.png" }
];

const dinnerfood = [
  { name: "Grilled Salmon", desc: "Salmon fillet, lemon butter, asparagus", price: "$22.95", img: "https://png.pngtree.com/png-clipart/20250123/original/pngtree-perfectly-grilled-salmon-with-garlic-butter-png-image_19322424.png" },
  { name: "Beef Tenderloin", desc: "Tenderloin, red wine sauce, mashed potato", price: "$28.95", img: "https://tavolaculinary.ca/wp-content/uploads/2023/11/seasonal-25.png" },
  { name: "Lamb Chops", desc: "Lamb, rosemary, garlic, roasted vegetables", price: "$26.95", img: "https://www.papapolloni.net/wp-content/uploads/2022/02/LambChops.png" },
  { name: "Seafood Pasta", desc: "Linguine, shrimp, mussels, white wine sauce", price: "$24.95", img: "https://thecaspianpizza.com/wp-content/uploads/2024/05/caspian-pizza-Shrimp-Scampi-Pasta.webp" },
  { name: "Duck Confit", desc: "Duck leg, orange glaze, potato gratin", price: "$27.95", img: "https://www.luvaduck.com.au/wp-content/uploads/2025/07/Luv-a-Duck-Confit-Duck-Leg-02_2024_368-Shadows-RGB-HR.png" },
  { name: "Truffle Chicken", desc: "Chicken breast, truffle cream, wild mushroom", price: "$23.95", img: "https://dostavka.happy.bg/remote/files/images/1737648/fit_640_400.png?rev=1736322626" }
];




function renderMenuSection(data, containerId) {
  const container = document.getElementById(containerId);
  let html = '';

  data.map(item => {
    html += `
      <div class="menu-item">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
        <div class="menu-item-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
        <span class="menu-item-price">${item.price}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

renderMenuSection(startersfood, 'starters');
renderMenuSection(breakfastfood, 'breakfast');
renderMenuSection(lunchfood, 'lunch');
renderMenuSection(dinnerfood, 'dinner');

const firstTab = document.getElementById('starters');
firstTab.style.display = 'grid';
setTimeout(() => {
  firstTab.classList.add('tab-animate');
}, 50);




const testimonialsData = [
  { name: "Saul Goodman", job: "Entrepreneur", text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.", img: "https://themewagon.github.io/yummy-red/assets/img/testimonials/testimonials-1.jpg" },
  { name: "Sara Wilsson", job: "Designer", text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.", img: "https://themewagon.github.io/yummy-red/assets/img/testimonials/testimonials-2.jpg" },
  { name: "Jena Karlis", job: "Store Owner", text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.", img: "https://themewagon.github.io/yummy-red/assets/img/testimonials/testimonials-3.jpg" },
  { name: "Matt Brandon", job: "Freelancer", text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.", img: "https://themewagon.github.io/yummy-red/assets/img/testimonials/testimonials-4.jpg" }
];

let testimonialIndex = 0;

function renderTestimonials(direction) {
  if (!direction) direction = 'right';

  const content = document.getElementById('testimonialContent');
  const dots = document.getElementById('testimonialDots');
  const item = testimonialsData[testimonialIndex];

  content.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');

  if (direction === 'right') {
    content.classList.add('slide-out-left');
  } else {
    content.classList.add('slide-out-right');
  }

  setTimeout(() => {
    content.innerHTML = `
      <div class="testimonial-item">
        <div class="testimonial-text">
          <p><i class="fas fa-quote-left"></i> ${item.text} <i class="fas fa-quote-right"></i></p>
          <h4>${item.name}</h4>
          <span>${item.job}</span>
          <div class="testimonial-stars">★★★★★</div>
        </div>
        <div class="testimonial-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
      </div>
    `;

    content.classList.remove('slide-out-left', 'slide-out-right');

    if (direction === 'right') {
      content.classList.add('slide-in-right');
    } else {
      content.classList.add('slide-in-left');
    }
  }, 300);

  let dotsHtml = '';
  testimonialsData.map((item, i) => {
    if (i === testimonialIndex) {
      dotsHtml += `<span class="active" onclick="goTestimonial(${i})"></span>`;
    } else {
      dotsHtml += `<span onclick="goTestimonial(${i})"></span>`;
    }
  });
  dots.innerHTML = dotsHtml;
}

function nextTestimonial() {
  testimonialIndex++;
  if (testimonialIndex >= testimonialsData.length) testimonialIndex = 0;
  renderTestimonials('right');
}

function prevTestimonial() {
  testimonialIndex--;
  if (testimonialIndex < 0) testimonialIndex = testimonialsData.length - 1;
  renderTestimonials('left');
}

function goTestimonial(index) {
  const direction = index > testimonialIndex ? 'right' : 'left';
  testimonialIndex = index;
  renderTestimonials(direction);
}




const eventsData = [
  { title: "Birthday Parties", price: "$499", text: "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime.", img: "https://themewagon.github.io/yummy-red/assets/img/events-3.jpg" },
  { title: "Wedding Parties", price: "$899", text: "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime.", img: "https://themewagon.github.io/yummy-red/assets/img/events-4.jpg" },
  { title: "Custom Parties", price: "$299", text: "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae.", img: "https://themewagon.github.io/yummy-red/assets/img/events-1.jpg" }
];

function renderEvents() {
  const slider = document.getElementById('eventsSlider');
  const dots = document.getElementById('eventDots');
  let html = '';
  let dotsHtml = '';

  eventsData.map((item, i) => {
    html += `
      <div class="event-card" style="background-image:url('${item.img}')" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="event-info">
          <h4>${item.title}</h4>
          <div class="event-price">${item.price}</div>
          <p>${item.text}</p>
        </div>
      </div>
    `;

    if (i === 1) {
      dotsHtml += `<span class="active"></span>`;
    } else {
      dotsHtml += `<span></span>`;
    }
  });

  slider.innerHTML = html;
  dots.innerHTML = dotsHtml;
}




const chefsData = [
  { name: "Walter White", job: "Master Chef", text: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.", img: "https://themewagon.github.io/yummy-red/assets/img/chefs/chefs-1.jpg" },
  { name: "Sarah Jhonson", job: "Patissier", text: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.", img: "https://themewagon.github.io/yummy-red/assets/img/chefs/chefs-2.jpg" },
  { name: "William Anderson", job: "Cook", text: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.", img: "https://themewagon.github.io/yummy-red/assets/img/chefs/chefs-3.jpg" }
];

function renderChefs() {
  const grid = document.getElementById('chefsGrid');
  let html = '';

  chefsData.map((item, i) => {
    html += `
      <div class="chef-card" data-aos="fade-up" data-aos-delay="${i * 100}">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="chef-social">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="chef-info">
          <h4>${item.name}</h4>
          <span>${item.job}</span>
          <p>${item.text}</p>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}




const galleryData = [
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-1.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-2.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-3.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-4.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-5.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-6.jpg",
  "https://themewagon.github.io/yummy-red/assets/img/gallery/gallery-7.jpg"
];

let galleryIndex = 2;
let galleryAnimating = false;

function renderGallery(direction) {
  const slider = document.getElementById('gallerySlider');
  const dots = document.getElementById('galleryDots');

  if (direction && galleryAnimating) return;

  if (direction) {
    galleryAnimating = true;

    if (direction === 'right') {
      slider.classList.add('gallery-slide-out-left');
    } else {
      slider.classList.add('gallery-slide-out-right');
    }

    setTimeout(() => {
      buildGallery(slider, dots);
      slider.classList.remove('gallery-slide-out-left', 'gallery-slide-out-right');

      if (direction === 'right') {
        slider.classList.add('gallery-slide-in-right');
      } else {
        slider.classList.add('gallery-slide-in-left');
      }

      setTimeout(() => {
        slider.classList.remove('gallery-slide-in-right', 'gallery-slide-in-left');
        galleryAnimating = false;
      }, 400);
    }, 300);

  } else {
    buildGallery(slider, dots);
  }
}

function buildGallery(slider, dots) {
  let html = '';
  let dotsHtml = '';

  for (let i = 0; i < 5; i++) {
    let idx = galleryIndex - 2 + i;
    if (idx < 0) idx = galleryData.length + idx;
    if (idx >= galleryData.length) idx = idx - galleryData.length;

    if (i === 2) {
      html += `<div class="gallery-item active" onclick="goGallery(${idx})">`;
    } else {
      html += `<div class="gallery-item" onclick="goGallery(${idx})">`;
    }
    html += `<img src="${galleryData[idx]}" alt="gallery" loading="lazy">`;
    html += `</div>`;
  }

  galleryData.map((url, i) => {
    if (i === galleryIndex) {
      dotsHtml += `<span class="active" onclick="goGallery(${i})"></span>`;
    } else {
      dotsHtml += `<span onclick="goGallery(${i})"></span>`;
    }
  });

  slider.innerHTML = html;
  dots.innerHTML = dotsHtml;
}

function nextGallery() {
  galleryIndex++;
  if (galleryIndex >= galleryData.length) galleryIndex = 0;
  renderGallery('right');
}

function prevGallery() {
  galleryIndex--;
  if (galleryIndex < 0) galleryIndex = galleryData.length - 1;
  renderGallery('left');
}

function goGallery(index) {
  const direction = index > galleryIndex ? 'right' : 'left';
  galleryIndex = index;
  renderGallery(direction);
}




setInterval(nextTestimonial, 5000);
setInterval(nextGallery, 3500);




renderTestimonials();
renderEvents();
renderChefs();
renderGallery();

AOS.init({ duration: 900, once: true });