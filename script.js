// Mock Curated Luxury Datasets structured to represent Zylio catalog values
const newArrivalsData = [
    { id: 101, brand: "ZYLIO LUXE", name: "Oversized Street Tee", price: 2499, oldPrice: 4999, img: "./oversized-shirt.jpg" },
    { id: 102, brand: "ZYLIO STUDIO", name: "Velvet Evening Gown", price: 1899, oldPrice: 3299, img: "./Images/Velvet Gown.avif" },
    { id: 103, brand: "ZYLIO URBAN", name: "501 Original Fit Jeans", price: 1299, oldPrice: 2199, img: "./Images/Fit Jeans.avif" },
    { id: 104, brand: "ZYLIO CLASSICS", name: "Monochrome Low-Top Leather Sneakers", price: 3499, oldPrice: 5999, img: "./Images/Leather Sneaker.jpg" }
];

const mostWantedData = [
    { id: 201, brand: "ZYLIO LUXE", name: "Premium Bomber Jacket", price: 4599, oldPrice: 8999, img: "./wanted1.jpg" },
    { id: 202, brand: "ZYLIO STUDIO", name: "Minimalist Ribbed Cardigan", price: 1499, oldPrice: 2499, img: "./Images/Cardigan.jpg" },
    { id: 203, brand: "ZYLIO URBAN", name: "Utility Cargo Denim Trouser", price: 2199, oldPrice: 3999, img: "./Images/Cargo Denim.jpg" },
    { id: 204, brand: "ZYLIO ESSENTIALS", name: "Classic Cotton Polo", price: 999, oldPrice: 1999, img: "./Images/White Polo.avif" }
];

// Cart State Counter Management
let activeBagCount = 0;

// Initialize Domestic Rendering Sequences
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(newArrivalsData, "new-arrivals-container");
    renderProducts(mostWantedData, "most-wanted-container");
    setupUserInterfaceInteractions();
});

// Structural UI Logic Builder Injector
function renderProducts(productArray, containerId) {
    const targetGrid = document.getElementById(containerId);
    if (!targetGrid) return;

    targetGrid.innerHTML = productArray.map(item => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <span class="badge-sale">Sale</span>
                <img src="${item.img}" alt="${item.name}">
                <div class="wishlist-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product-action-overlay">
                    <button class="btn-add-bag" onclick="incrementCartBag()">Add to Bag</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-brand">${item.brand}</span>
                <a href="#" class="product-title">${item.name}</a>
                <div class="product-price-row">
                    <span class="price-actual">Rs. ${item.price}</span>
                    <span class="price-old">Rs. ${item.oldPrice}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Global Interaction Triggers & DOM Selectors
function setupUserInterfaceInteractions() {
    // 1. Alert bar closure setup
    const closeBarBtn = document.querySelector(".close-top-bar");
    if (closeBarBtn) {
        closeBarBtn.addEventListener("click", () => {
            const topBar = document.querySelector(".top-bar");
            topBar.style.marginTop = `-${topBar.offsetHeight}px`;
            topBar.style.opacity = '0';
        });
    }

    // 2. Responsive Side Drawer Toggle Actions
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const closeDrawer = document.querySelector(".close-drawer");
    const sideDrawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".drawer-overlay");

    const openMenuDrawer = () => {
        sideDrawer.classList.add("open");
        overlay.style.display = "block";
    };

    const closeMenuDrawer = () => {
        sideDrawer.classList.remove("open");
        overlay.style.display = "none";
    };

    if (menuToggle) menuToggle.addEventListener("click", openMenuDrawer);
    if (closeDrawer) closeDrawer.addEventListener("click", closeMenuDrawer);
    if (overlay) overlay.addEventListener("click", closeMenuDrawer);

    // Close drawer if item links inside drawer are tapped
    const drawerLinks = document.querySelectorAll(".drawer-links a");
    drawerLinks.forEach(link => link.addEventListener("click", closeMenuDrawer));
}

// Global Cart Counter Trigger Interaction
function incrementCartBag() {
    activeBagCount++;
    const counterNode = document.getElementById("cart-counter");
    if (counterNode) {
        counterNode.innerText = activeBagCount;

        // Minor visual feedback scale pop transition effect
        counterNode.style.transform = "scale(1.3)";
        counterNode.style.backgroundColor = "#C5A880";
        setTimeout(() => {
            counterNode.style.transform = "scale(1)";
            counterNode.style.backgroundColor = "#1E2836";
        }, 200);
    }
}

// ++++========================================================================++++
//======================= Collection ========================

// Premium Mock Product Data Array Asset Matrix
const productsData = [
    { id: 1, name: "Oversized Street Tee", brand: "Peter England", price: "₹1,499", tags: ["party", "white", "new"], img: "./arrivals1.jpg" },
    { id: 2, name: "Premium Bomber Jacket", brand: "Gucci", price: "₹4,599", tags: ["party", "others", "wanted"], img: "./wanted1.jpg" },
    { id: 3, name: "Cargo joggers", brand: "Levi's", price: "₹1,899", tags: ["summer", "others", "new"], img: "./arrivals2.jpg" },
    { id: 4, name: "Sports Shoes", brand: "Puma", price: "₹4,500", tags: ["beach", "black", "others"], img: "./collection3.jpg" },
    { id: 5, name: "Graphic Hoodie", brand: "Adidas", price: "₹1.299", tags: ["beach", "black", "new"], img: "./arrivals3.jpg" },
    { id: 6, name: "White Sneakers", brand: "Puma", price: "₹110", tags: ["summer","white", "others"], img: "./collection2.jpg" },
    { id: 7, name: "Leather Sneaker", brand: "Peter England", price: "₹3,499", tags: ["party", "others", "new"], img: "./arrivals4.jpg" },
    { id: 8, name: "Retro Track Set", brand: "Gucci", price: "₹999", tags: ["summer", "others", "wanted"], img: "./wanted4.jpg" },
    { id: 9, name: "501 Original Fit Jeans", brand: "Levi's", price: "₹1,598", tags: ["summer", "blue", "others"], img: "./collection1.jpg" },
    { id: 10, name: "Minimalist Ribbed Cardigan", brand: "Gucci", price: "₹1,499", tags: ["Party", "others", "wanted"], img: "./wanted2.jpg" },
    { id: 11, name: "Utility Cargo Denim Trouser", brand: "Adidas", price: "₹2,199", tags: ["summer","blue", "wanted"], img: "./wanted3.jpg" },
    { id: 12, name: "Midnight Navy Suit", brand: "Peter England", price: "₹3,500", tags: ["party", "blue", "others"], img: "./collection4.jpg" },
    { id: 13, name: "Tailored Blazer", brand: "Gucci", price: "₹2,400", tags: ["party", "black", "others"], img: "./collection5.jpg" },
    { id: 14, name: "White Denim Cap", brand: "Levi's", price: "₹1,85", tags: ["beach", "white", "others"], img: "./collection6.jpg" },
    { id: 15, name: "Pro Training Shoes", brand: "Nike", price: "₹1,400", tags: ["summer", "blue", "others"], img: "./collection7.jpg" },
    { id: 16, name: "Homewear", brand: "Puma", price: "₹1.500", tags: ["summer", "others", "others"], img: "./collection8.jpg" }
];

// Initialize and generate the initial catalog display grid view
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(productsData);

    // Attach native click event listeners to filter checkboxes
    const checkBoxes = document.querySelectorAll(".filter-check");
    checkBoxes.forEach(box => {
        box.addEventListener("change", filterProducts);
    });
});

// Render loop factory generating items markup
function renderProducts(productsList) {
    const gridContainer = document.getElementById("collections-grid");
    const emptyState = document.getElementById("no-products-msg");

    if (!gridContainer) return;

    if (productsList.length === 0) {
        gridContainer.style.display = "none";
        emptyState.style.display = "flex";
        return;
    }

    gridContainer.style.display = "grid";
    emptyState.style.display = "none";

    gridContainer.innerHTML = productsList.map(item => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${item.img}" alt="${item.name}">
                <div class="wishlist-icon"><i class="fa-regular fa-heart"></i></div>
            </div>
            <div class="product-info">
                <span class="product-brand">${item.brand}</span>
                <a href="#" class="product-title">${item.name}</a>
                <span class="product-price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// Integrated Input Query and Box Filter Combinator
function filterProducts() {
    const searchQuery = document.getElementById("collection-search").value.toLowerCase();

    // Extract array tags from checked boxes across the DOM workspace
    const checkedBoxes = Array.from(document.querySelectorAll(".filter-check:checked"));
    const selectedTags = checkedBoxes.map(box => box.value);

    const filtered = productsData.filter(product => {
        // Condition A: Text String Query validation match
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) ||
            product.brand.toLowerCase().includes(searchQuery);

        // Condition B: Multiple tags check match verification
        const matchesTags = selectedTags.length === 0 ||
            selectedTags.every(tag => product.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    renderProducts(filtered);
}

// ++++========================================================================++++
//======================= Contact ========================

// Form Submission Success Trigger Integration
function handleFormSubmit(event) {
    event.preventDefault(); // Stop standard page refreshing sequences

    const contactForm = document.getElementById("zylio-contact-form");
    const successAlert = document.getElementById("form-success-alert");

    // Animate the button out of focus on validation confirmation
    const submitBtn = contactForm.querySelector(".btn-submit-premium");
    submitBtn.style.opacity = "0.7";
    submitBtn.innerHTML = `<span>Processing...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

    setTimeout(() => {
        // Clear all native active visual inner configurations safely
        contactForm.reset();
        contactForm.style.display = "none";

        // Expose dynamic luxury styled success box elements
        successAlert.style.display = "flex";
    }, 1200);
}

// Global Window Scrolling Watchers (Back-to-top execution tracker)
window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    }
});

// Click action targeting native top coordinates
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}