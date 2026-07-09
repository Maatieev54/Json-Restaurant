// ============================================================
// Yummy — shared interactions (guarded per page)
// ============================================================

// ---------- Mobile nav ----------
function toggleMobile() {
  document.getElementById("mobileNav")?.classList.toggle("open");
  document.getElementById("mobileOverlay")?.classList.toggle("open");
}
function closeMobile() {
  document.getElementById("mobileNav")?.classList.remove("open");
  document.getElementById("mobileOverlay")?.classList.remove("open");
}
function toggleMobileDropdown(e) {
  e.preventDefault();
  document.getElementById("mobileDropdown")?.classList.toggle("open");
}

// ---------- Navbar scroll + back to top ----------
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
  const btn = document.getElementById("backTop");
  if (btn) btn.classList.toggle("visible", window.scrollY > 400);
  checkCounters();
});

// ---------- Preloader ----------
window.addEventListener("load", () => {
  const p = document.getElementById("preloader");
  if (p) setTimeout(() => p.classList.add("fade-out"), 800);
});

// ---------- Counters ----------
let counterStarted = false;
function checkCounters() {
  const stats = document.getElementById("stats");
  if (!stats || counterStarted) return;
  if (stats.getBoundingClientRect().top < window.innerHeight - 100) {
    counterStarted = true;
    [
      { id: "counter1", target: 232, step: 3 },
      { id: "counter2", target: 521, step: 6 },
      { id: "counter3", target: 1453, step: 18 },
      { id: "counter4", target: 32, step: 1 },
    ].forEach((c) => {
      const el = document.getElementById(c.id);
      if (!el) return;
      let n = 0;
      const t = setInterval(() => {
        n += c.step;
        if (n >= c.target) { n = c.target; clearInterval(t); }
        el.textContent = n;
      }, 30);
    });
  }
}

// ---------- Menu rendering + tabs ----------
function menuCardHTML(item) {
  return `
    <div class="menu-item">
      <img src="${item.img}" alt="${item.name}" loading="lazy" />
      <div class="menu-item-info"><h4>${item.name}</h4><p>${item.desc}</p></div>
      <span class="menu-item-price">${item.price}</span>
    </div>`;
}
function renderMenu(data, id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = data.map(menuCardHTML).join("");
}
function switchTab(btn, tabId) {
  document.querySelectorAll(".menu-tab").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((t) => { t.style.display = "none"; t.classList.remove("tab-animate"); });
  btn.classList.add("active");
  const tab = document.getElementById(tabId);
  tab.style.display = "grid";
  setTimeout(() => tab.classList.add("tab-animate"), 10);
  const titles = { starters: "Starters", breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner" };
  const big = document.getElementById("menuBigTitle");
  if (big) big.textContent = titles[tabId];
}
if (typeof MENU !== "undefined") {
  renderMenu(MENU.starters, "starters");
  renderMenu(MENU.breakfast, "breakfast");
  renderMenu(MENU.lunch, "lunch");
  renderMenu(MENU.dinner, "dinner");
  const first = document.getElementById("starters");
  if (first && document.getElementById("menuBigTitle")) {
    first.style.display = "grid";
    setTimeout(() => first.classList.add("tab-animate"), 50);
  }
  // Home page preview (starters only)
  renderMenu(MENU.starters.slice(0, 6), "menuPreview");
}

// ---------- Testimonials ----------
let tIndex = 0;
function renderTestimonials(dir = "right") {
  const content = document.getElementById("testimonialContent");
  const dots = document.getElementById("testimonialDots");
  if (!content) return;
  const item = TESTIMONIALS[tIndex];
  content.className = "testimonial-content " + (dir === "right" ? "slide-out-left" : "slide-out-right");
  setTimeout(() => {
    content.innerHTML = `
      <div class="testimonial-item">
        <div class="testimonial-text">
          <p><i class="fas fa-quote-left"></i> ${item.text} <i class="fas fa-quote-right"></i></p>
          <h4>${item.name}</h4><span>${item.job}</span>
          <div class="testimonial-stars">★★★★★</div>
        </div>
        <div class="testimonial-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      </div>`;
    content.className = "testimonial-content " + (dir === "right" ? "slide-in-right" : "slide-in-left");
  }, 300);
  if (dots) dots.innerHTML = TESTIMONIALS.map((_, i) =>
    `<span class="${i === tIndex ? "active" : ""}" onclick="goTestimonial(${i})"></span>`).join("");
}
function nextTestimonial() { tIndex = (tIndex + 1) % TESTIMONIALS.length; renderTestimonials("right"); }
function prevTestimonial() { tIndex = (tIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length; renderTestimonials("left"); }
function goTestimonial(i) { const d = i > tIndex ? "right" : "left"; tIndex = i; renderTestimonials(d); }

// ---------- Events ----------
function renderEvents() {
  const slider = document.getElementById("eventsSlider");
  const dots = document.getElementById("eventDots");
  if (!slider) return;
  slider.innerHTML = EVENTS.map((e, i) => `
    <div class="event-card" style="background-image:url('${e.img}')" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="event-info"><h4>${e.title}</h4><div class="event-price">${e.price}</div><p>${e.text}</p></div>
    </div>`).join("");
  if (dots) dots.innerHTML = EVENTS.map((_, i) => `<span class="${i === 1 ? "active" : ""}"></span>`).join("");
}

// ---------- Chefs ----------
function renderChefs() {
  const grid = document.getElementById("chefsGrid");
  if (!grid) return;
  grid.innerHTML = CHEFS.map((c, i) => `
    <div class="chef-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="chef-social">
        <a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="chef-info"><h4>${c.name}</h4><span>${c.job}</span><p>${c.text}</p></div>
    </div>`).join("");
}

// ---------- Gallery ----------
let gIndex = 2, gAnimating = false;
function buildGallery() {
  const slider = document.getElementById("gallerySlider");
  const dots = document.getElementById("galleryDots");
  if (!slider) return;
  let html = "";
  for (let i = 0; i < 5; i++) {
    let idx = (gIndex - 2 + i + GALLERY.length) % GALLERY.length;
    html += `<div class="gallery-item ${i === 2 ? "active" : ""}" onclick="goGallery(${idx})"><img src="${GALLERY[idx]}" alt="gallery" loading="lazy"></div>`;
  }
  slider.innerHTML = html;
  if (dots) dots.innerHTML = GALLERY.map((_, i) => `<span class="${i === gIndex ? "active" : ""}" onclick="goGallery(${i})"></span>`).join("");
}
function renderGallery(dir) {
  const slider = document.getElementById("gallerySlider");
  if (!slider) return;
  if (dir && gAnimating) return;
  if (!dir) return buildGallery();
  gAnimating = true;
  slider.classList.add(dir === "right" ? "gallery-slide-out-left" : "gallery-slide-out-right");
  setTimeout(() => {
    buildGallery();
    slider.classList.remove("gallery-slide-out-left", "gallery-slide-out-right");
    slider.classList.add(dir === "right" ? "gallery-slide-in-right" : "gallery-slide-in-left");
    setTimeout(() => { slider.classList.remove("gallery-slide-in-right", "gallery-slide-in-left"); gAnimating = false; }, 400);
  }, 300);
}
function nextGallery() { gIndex = (gIndex + 1) % GALLERY.length; renderGallery("right"); }
function prevGallery() { gIndex = (gIndex - 1 + GALLERY.length) % GALLERY.length; renderGallery("left"); }
function goGallery(i) { const d = i > gIndex ? "right" : "left"; gIndex = i; renderGallery(d); }

// ---------- Forms ----------
function wireForm(formSel, msgSel) {
  const form = document.querySelector(formSel);
  if (!form) return;
  const msg = document.querySelector(msgSel);
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    if (name && name.value.trim().length < 2) { msg.textContent = "Please enter your name."; msg.className = "form-msg err"; name.focus(); return; }
    if (email && !isEmail(email.value.trim())) { msg.textContent = "Please enter a valid email address."; msg.className = "form-msg err"; email.focus(); return; }
    msg.textContent = "Thank you! Your request has been received — we'll be in touch shortly.";
    msg.className = "form-msg ok";
    form.reset();
  });
}

// ---------- Init ----------
renderTestimonials();
renderEvents();
renderChefs();
if (document.getElementById("gallerySlider")) buildGallery();
wireForm(".booking-form", "#bookingMsg");
wireForm(".contact-form", "#contactMsg");

if (TESTIMONIALS && document.getElementById("testimonialContent")) setInterval(nextTestimonial, 5000);
if (document.getElementById("gallerySlider")) setInterval(nextGallery, 3500);

if (window.AOS) AOS.init({ duration: 900, once: true });
