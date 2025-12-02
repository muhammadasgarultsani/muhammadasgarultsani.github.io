// ==========================================
// Data Management
// ==========================================

// Dummy Data - Products
const dummyProducts = [
    { id: 1, name: 'Alpukat', category: 'Buah', price: 28000, stock: 30, image: 'img/sayur_buah/Alpukat.png' },
    { id: 2, name: 'Anggur', category: 'Buah', price: 35000, stock: 25, image: 'img/sayur_buah/Anggur.png' },
    { id: 3, name: 'Apel', category: 'Buah', price: 30000, stock: 35, image: 'img/sayur_buah/Apel.png' },
    { id: 4, name: 'Bawang Merah', category: 'Rempah-Rempah', price: 25000, stock: 50, image: 'img/sayur_buah/Bawang-merah.png' },
    { id: 5, name: 'Bawang Putih', category: 'Rempah-Rempah', price: 20000, stock: 40, image: 'img/sayur_buah/Bawang-putih.png' },
    { id: 6, name: 'Bayam', category: 'Sayur', price: 12000, stock: 45, image: 'img/sayur_buah/Bayam.png' },
    { id: 7, name: 'Belimbing', category: 'Buah', price: 22000, stock: 20, image: 'img/sayur_buah/Belimbing.png' },
    { id: 8, name: 'Brokoli', category: 'Sayur', price: 18000, stock: 30, image: 'img/sayur_buah/Brokoli.png' },
    { id: 9, name: 'Buah Naga', category: 'Buah', price: 32000, stock: 22, image: 'img/sayur_buah/Buah-naga.png' },
    { id: 10, name: 'Buncis', category: 'Sayur', price: 16000, stock: 35, image: 'img/sayur_buah/Buncis.png' },
    { id: 11, name: 'Ceri', category: 'Buah', price: 38000, stock: 18, image: 'img/sayur_buah/Ceri.png' },
    { id: 12, name: 'Daun Bawang', category: 'Rempah-Rempah', price: 8000, stock: 60, image: 'img/sayur_buah/Daun-bawang.png' },
    { id: 13, name: 'Durian', category: 'Buah', price: 85000, stock: 10, image: 'img/sayur_buah/Durian.png' },
    { id: 14, name: 'Jambu', category: 'Buah', price: 25000, stock: 28, image: 'img/sayur_buah/Jambu.png' },
    { id: 15, name: 'Jamur', category: 'Sayur', price: 22000, stock: 25, image: 'img/sayur_buah/Jamur.png' },
    { id: 16, name: 'Jeruk', category: 'Buah', price: 28000, stock: 40, image: 'img/sayur_buah/Jeruk.png' },
    { id: 17, name: 'Kacang Panjang', category: 'Sayur', price: 18000, stock: 32, image: 'img/sayur_buah/Kacang-panjang.png' },
    { id: 18, name: 'Kangkung', category: 'Sayur', price: 10000, stock: 55, image: 'img/sayur_buah/Kangkung.png' },
    { id: 19, name: 'Kelengkeng', category: 'Buah', price: 32000, stock: 24, image: 'img/sayur_buah/Kelengkeng.png' },
    { id: 20, name: 'Kentang', category: 'Sayur', price: 14000, stock: 60, image: 'img/sayur_buah/Kentang.png' },
    { id: 21, name: 'Kiwi', category: 'Buah', price: 36000, stock: 20, image: 'img/sayur_buah/Kiwi.png' },
    { id: 22, name: 'Kol Ungu', category: 'Sayur', price: 16000, stock: 30, image: 'img/sayur_buah/Kol-ungu.png' },
    { id: 23, name: 'Kol', category: 'Sayur', price: 15000, stock: 35, image: 'img/sayur_buah/Kol.jpg' },
    { id: 24, name: 'Kurma', category: 'Buah', price: 42000, stock: 15, image: 'img/sayur_buah/Kurma.png' },
    { id: 25, name: 'Labu', category: 'Sayur', price: 20000, stock: 25, image: 'img/sayur_buah/Labu.png' },
    { id: 26, name: 'Leci', category: 'Buah', price: 38000, stock: 22, image: 'img/sayur_buah/Leci.png' },
    { id: 27, name: 'Lemon', category: 'Buah', price: 24000, stock: 28, image: 'img/sayur_buah/Lemon.png' },
    { id: 28, name: 'Lobak', category: 'Sayur', price: 12000, stock: 40, image: 'img/sayur_buah/Lobak.png' },
    { id: 29, name: 'Mangga', category: 'Buah', price: 35000, stock: 25, image: 'img/sayur_buah/Mangga.png' },
    { id: 30, name: 'Manggis', category: 'Buah', price: 40000, stock: 18, image: 'img/sayur_buah/Manggis.png' },
    { id: 31, name: 'Melon', category: 'Buah', price: 45000, stock: 12, image: 'img/sayur_buah/Melon.png' },
    { id: 32, name: 'Nanas', category: 'Buah', price: 22000, stock: 32, image: 'img/sayur_buah/Nanas.png' },
    { id: 33, name: 'Paprika', category: 'Sayur', price: 26000, stock: 20, image: 'img/sayur_buah/Paprika.png' },
    { id: 34, name: 'Pepaya', category: 'Buah', price: 26000, stock: 30, image: 'img/sayur_buah/Pepaya.png' },
    { id: 35, name: 'Pir', category: 'Buah', price: 32000, stock: 24, image: 'img/sayur_buah/Pir.png' },
    { id: 36, name: 'Pisang', category: 'Buah', price: 20000, stock: 50, image: 'img/sayur_buah/Pisang.png' },
    { id: 37, name: 'Rambutan', category: 'Buah', price: 34000, stock: 26, image: 'img/sayur_buah/Rambutan.png' },
    { id: 38, name: 'Salak', category: 'Buah', price: 28000, stock: 28, image: 'img/sayur_buah/Salak.png' },
    { id: 39, name: 'Sawi Putih', category: 'Sayur', price: 13000, stock: 45, image: 'img/sayur_buah/Sawi-putih.png' },
    { id: 40, name: 'Sawi', category: 'Sayur', price: 12000, stock: 48, image: 'img/sayur_buah/Sawi.png' },
    { id: 41, name: 'Selada', category: 'Sayur', price: 14000, stock: 40, image: 'img/sayur_buah/Selada.png' },
    { id: 42, name: 'Seledri', category: 'Rempah-Rempah', price: 15000, stock: 35, image: 'img/sayur_buah/Seledri.png' },
    { id: 43, name: 'Semangka', category: 'Buah', price: 30000, stock: 15, image: 'img/sayur_buah/Semangka.png' },
    { id: 44, name: 'Strawberry', category: 'Buah', price: 45000, stock: 20, image: 'img/sayur_buah/Strawberry.png' },
    { id: 45, name: 'Terong', category: 'Sayur', price: 17000, stock: 33, image: 'img/sayur_buah/Terong.png' },
    { id: 46, name: 'Timun', category: 'Sayur', price: 11000, stock: 50, image: 'img/sayur_buah/Timun.png' },
    { id: 47, name: 'Tomat', category: 'Sayur', price: 15000, stock: 52, image: 'img/sayur_buah/Tomat.png' },
    { id: 48, name: 'Wortel', category: 'Sayur', price: 16000, stock: 48, image: 'img/sayur_buah/Wortel.png' },
    { id: 49, name: 'Bawang Bombay', category: 'Rempah-Rempah', price: 22000, stock: 35, image: 'img/sayur_buah/bawang-bombay.png' },
    { id: 50, name: 'Kemiri', category: 'Rempah-Rempah', price: 32000, stock: 18, image: 'img/sayur_buah/kemiri.png' }
];

// Dummy Login Data
const dummyAdmin = {
    username: 'admin',
    password: 'admin123'
};

// Advertisement Data
const advertisements = [
    { id: 1, image: 'img/iklan/iklan1.jpg', alt: 'Iklan 1' },
    { id: 2, image: 'img/iklan/iklan2.jpg', alt: 'Iklan 2' },
    { id: 3, image: 'img/iklan/iklan3.jpg', alt: 'Iklan 3' },
    { id: 4, image: 'img/iklan/iklan4.jpg', alt: 'Iklan 4' },
    { id: 5, image: 'img/iklan/iklan5.jpg', alt: 'Iklan 5' }
];

// ==========================================
// Global State
// ==========================================

let currentUser = null;
let isAdminMode = false;
let map = null;
let selectedLocation = { lat: -6.2088, lng: 106.8456 }; // Default: Jakarta
let currentProductIdForCart = null;
let currentFilter = 'Semua';

// ==========================================
// Initialize Application
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if user already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        loginSuccess(user.username, user.isAdmin);
    }

    // Initialize products from localStorage or use dummy data
    initializeProducts();

    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Add product form
    document.getElementById('addProductForm').addEventListener('submit', handleAddProduct);

    // Edit form
    document.getElementById('editForm').addEventListener('submit', handleEditProduct);

    // Cart form
    document.getElementById('cartForm').addEventListener('submit', handleOrder);

    // Product quantity change
    document.getElementById('cartQuantity').addEventListener('change', updateTotalPrice);

    // Image file input listeners
    document.getElementById('productImageFile').addEventListener('change', function(e) {
        previewImage(e.target.files[0], 'addImagePreviewImg', 'addImagePreview');
    });

    document.getElementById('productImageUrl').addEventListener('change', function(e) {
        previewImageUrl(e.target.value, 'addImagePreviewImg', 'addImagePreview');
    });

    document.getElementById('editProductImageFile').addEventListener('change', function(e) {
        previewImage(e.target.files[0], 'editImagePreviewImg', 'editImagePreview');
    });

    document.getElementById('editProductImageUrl').addEventListener('change', function(e) {
        previewImageUrl(e.target.value, 'editImagePreviewImg', 'editImagePreview');
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.navbar');
    if (menuToggle) {
        // ensure aria attribute
        if (!menuToggle.hasAttribute('aria-expanded')) menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.addEventListener('click', function(e) {
            const isOpen = nav && nav.classList.toggle('open');
            // toggle appearance on button
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // close nav when clicking a nav link (mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (nav && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    menuToggle.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

function initializeProducts() {
    // Always update products with latest dummyProducts to ensure all 50 products are available
    localStorage.setItem('products', JSON.stringify(dummyProducts));
}

// ==========================================
// Authentication
// ==========================================

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === dummyAdmin.username && password === dummyAdmin.password) {
        loginSuccess(username, true);
    } else {
        showLoginError('Username atau password salah!');
    }
}

function loginSuccess(username, isAdmin) {
    currentUser = { username, isAdmin };
    isAdminMode = isAdmin;

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Hide login modal
    document.getElementById('loginModal').classList.remove('active');

    // Show app
    document.getElementById('appContainer').style.display = 'block';

    // Update UI
    if (isAdmin) {
        // Hide Orders and Products links for admin, show only Admin Panel
        document.querySelector('a[onclick="switchPage(\'orders\')"').style.display = 'none';
        document.querySelector('.admin-link').classList.add('visible');
        loadAdminPanel();
    } else {
        // Show Orders for regular users, hide Admin Panel
        document.querySelector('a[onclick="switchPage(\'orders\')"').style.display = 'block';
        document.querySelector('.admin-link').classList.remove('visible');
    }

    // Load home page
    loadHomePage();
}

function showLoginError(message) {
    const errorEl = document.getElementById('loginError');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function skipLogin() {
    loginSuccess('Guest', false);
}

// ==========================================
// UI Helpers: Toasts and Modal
// ==========================================
function showToast(message, type = 'info', timeout = 3500) {
    const container = document.getElementById('uiToast');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${type === 'success' ? '<i class="fas fa-check-circle"></i>' : type === 'error' ? '<i class="fas fa-exclamation-triangle"></i>' : type === 'warn' ? '<i class="fas fa-exclamation-circle"></i>' : '<i class="fas fa-info-circle"></i>'}</div>
        <div class="toast-text">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(20px)';
        toast.style.opacity = '0';
        setTimeout(() => container.removeChild(toast), 300);
    }, timeout);
}

function showModal(title, htmlContent, actions = []) {
    const modal = document.getElementById('uiModal');
    const body = document.getElementById('uiModalBody');
    const actionsEl = document.getElementById('uiModalActions');
    if (!modal || !body || !actionsEl) return;

    body.innerHTML = `<h3 style="margin-top:0; color:#27ae60">${title}</h3>` + htmlContent;
    actionsEl.innerHTML = '';

    actions.forEach(act => {
        const btn = document.createElement('button');
        btn.className = act.class || 'btn btn-primary';
        btn.textContent = act.label || 'OK';
        btn.onclick = () => {
            if (act.onClick) act.onClick();
            if (act.close !== false) closeModal();
        };
        actionsEl.appendChild(btn);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('uiModal');
    if (!modal) return;
    modal.style.display = 'none';
}

function logout() {
    currentUser = null;
    isAdminMode = false;
    localStorage.removeItem('currentUser');

    // Reset UI
    document.getElementById('appContainer').style.display = 'none';
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').style.display = 'none';
    document.querySelector('.admin-link').classList.remove('visible');

    // Reset page selection
    switchPage('home');
}



// ==========================================
// Page Navigation
// ==========================================

function switchPage(pageName) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageId = pageName + 'Page';
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');

        // Load page content
        if (pageName === 'home') {
            loadHomePage();
        } else if (pageName === 'orders') {
            loadOrdersPage();
        } else if (pageName === 'admin') {
            loadAdminPanel();
        }
    }
}

// ==========================================
// Home Page - Products List
// ==========================================

function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Clear search when filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Reload products with filter
    loadHomePage();
}

function searchProducts(query) {
    const productsGrid = document.getElementById('productsGrid');
    const adsContainer = document.getElementById('adsContainer');
    let products = JSON.parse(localStorage.getItem('products'));
    
    if (!products || products.length === 0) {
        products = dummyProducts;
    }

    productsGrid.innerHTML = '';

    // Hide ads when searching, show when empty
    if (query.trim() === '') {
        adsContainer.style.display = 'block';
        // Reload full data with ads
        const adGrid = document.createElement('div');
        adGrid.className = 'ads-container';
        advertisements.forEach(ad => {
            const adElement = document.createElement('div');
            adElement.className = 'ad-item';
            adElement.innerHTML = `<img src="${ad.image}" alt="${ad.alt}" class="ad-image">`;
            adGrid.appendChild(adElement);
        });
        adsContainer.innerHTML = '';
        adsContainer.appendChild(adGrid);
    } else {
        adsContainer.style.display = 'none';
    }

    // Search and filter products
    let filteredProducts = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(query.toLowerCase());
        const matchCategory = currentFilter === 'Semua' || p.category === currentFilter;
        return matchSearch && matchCategory;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML += '<div class="empty-state"><i class="fas fa-search"></i><p>Produk tidak ditemukan</p></div>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function loadHomePage() {
    const productsGrid = document.getElementById('productsGrid');
    const adsContainer = document.getElementById('adsContainer');
    let products = JSON.parse(localStorage.getItem('products'));
    
    // Fallback to dummyProducts if localStorage doesn't have products
    if (!products || products.length === 0) {
        products = dummyProducts;
        localStorage.setItem('products', JSON.stringify(dummyProducts));
    }

    productsGrid.innerHTML = '';

    // Display advertisements (separate container)
    adsContainer.innerHTML = '';
    const adGrid = document.createElement('div');
    adGrid.className = 'ads-container';
    advertisements.forEach(ad => {
        const adElement = document.createElement('div');
        adElement.className = 'ad-item';
        adElement.innerHTML = `<img src="${ad.image}" alt="${ad.alt}" class="ad-image">`;
        adGrid.appendChild(adElement);
    });
    adsContainer.appendChild(adGrid);

    // Filter products by category
    let filteredProducts = products;
    if (currentFilter !== 'Semua') {
        filteredProducts = products.filter(p => p.category === currentFilter);
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML += '<div class="empty-state"><i class="fas fa-box-open"></i><p>Tidak ada produk tersedia</p></div>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stockStatus = product.stock > 0 ? `${product.stock} tersedia` : 'Habis';
    const stockClass = product.stock <= 5 ? 'low' : '';

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.style.display='none'">
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <span class="product-category">${product.category}</span>
            <div class="product-price">Rp ${formatPrice(product.price)}</div>
            <div class="product-stock ${stockClass}">${stockStatus}</div>
            ${product.stock > 0 
                ? `<button class="btn btn-primary" onclick="openCartModal(${product.id})">Pesan Sekarang</button>`
                : `<button class="btn btn-secondary" disabled>Stok Habis</button>`
            }
        </div>
    `;

    return card;
}

// ==========================================
// Cart & Order
// ==========================================

function openCartModal(productId) {
    if (!currentUser || isAdminMode) {
        showToast('Hanya pembeli yang bisa memesan. Silakan logout dan login sebagai pembeli.', 'warn');
        return;
    }

    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    const product = products.find(p => p.id === productId);

    if (!product) return;

    currentProductIdForCart = productId;

    document.getElementById('cartProductName').value = product.name;
    document.getElementById('cartProductId').value = product.id;
    document.getElementById('cartProductPrice').value = product.price;
    document.getElementById('cartQuantity').value = 1;
    document.getElementById('cartAddress').value = '';
    document.getElementById('cartLat').value = '';
    document.getElementById('cartLng').value = '';

    updateTotalPrice();
    
    document.getElementById('cartModal').classList.add('active');

    // Initialize map
    setTimeout(() => {
        initializeMap();
    }, 100);
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    if (map) {
        map.remove();
        map = null;
    }
    currentProductIdForCart = null;
}

function updateTotalPrice() {
    const price = parseInt(document.getElementById('cartProductPrice').value) || 0;
    const quantity = parseInt(document.getElementById('cartQuantity').value) || 1;
    const total = price * quantity;
    document.getElementById('totalPrice').textContent = `Rp ${formatPrice(total)}`;
}

function initializeMap() {
    if (map) {
        map.remove();
    }

    map = L.map('map').setView([selectedLocation.lat, selectedLocation.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    const marker = L.marker([selectedLocation.lat, selectedLocation.lng]).addTo(map);

    map.on('click', function(e) {
        selectedLocation = { lat: e.latlng.lat, lng: e.latlng.lng };
        marker.setLatLng(e.latlng);
        document.getElementById('cartLat').value = e.latlng.lat;
        document.getElementById('cartLng').value = e.latlng.lng;
        document.getElementById('mapInfo').textContent = `Lokasi dipilih: ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`;
    });

    // Set initial location
    document.getElementById('cartLat').value = selectedLocation.lat;
    document.getElementById('cartLng').value = selectedLocation.lng;
}

function handleOrder(e) {
    e.preventDefault();

    const productId = parseInt(document.getElementById('cartProductId').value);
    const quantity = parseInt(document.getElementById('cartQuantity').value);
    const address = document.getElementById('cartAddress').value;
    const lat = document.getElementById('cartLat').value;
    const lng = document.getElementById('cartLng').value;

    if (!address) {
        showToast('Alamat tidak boleh kosong!', 'warn');
        return;
    }

    if (!lat || !lng) {
        showToast('Pilih lokasi pada peta terlebih dahulu!', 'warn');
        return;
    }

    // Get products
    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    const product = products.find(p => p.id === productId);

    if (!product) {
        showToast('Produk tidak ditemukan!', 'error');
        return;
    }

    // Create order
    const order = {
        id: generateOrderId(),
        productId: productId,
        productName: product.name,
        quantity: quantity,
        price: product.price,
        totalPrice: product.price * quantity,
        address: address,
        // attach customer username if available
        customer: (currentUser && currentUser.username) ? currentUser.username : 'Guest',
        lat: lat,
        lng: lng,
        date: new Date().toLocaleString('id-ID'),
        status: 'Pending'
    };

    // Save order
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    showToast('Pesanan berhasil dibuat! Nomor Pesanan: ' + order.id, 'success');
    closeCartModal();
    loadOrdersPage();
    switchPage('orders');
}

function generateOrderId() {
    return 'ORD' + Date.now();
}

// ==========================================
// Orders Page
// ==========================================

function loadOrdersPage() {
    if (isAdminMode) {
        document.getElementById('ordersContainer').innerHTML = '<p class="empty-state">Admin tidak bisa melihat pesanan. Silakan logout dan login sebagai pembeli.</p>';
        return;
    }

    const ordersContainer = document.getElementById('ordersContainer');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    ordersContainer.innerHTML = '';

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="empty-state"><i class="fas fa-shopping-cart"></i><p>Belum ada pesanan. Mulai berbelanja sekarang!</p></div>';
        return;
    }

    orders.reverse().forEach(order => {
        const orderCard = createOrderCard(order);
        ordersContainer.appendChild(orderCard);
    });
}

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';

    const statusClass = order.status.toLowerCase();

    card.innerHTML = `
        <div class="order-header">
            <div>
                <div class="order-id">Pesanan ${order.id}</div>
                <div class="order-date">${order.date}</div>
            </div>
            <span class="order-status ${statusClass}">${order.status}</span>
        </div>
        <div class="order-items">
            <div class="order-item">
                <div class="order-item-name">${order.productName}</div>
                <div class="order-item-details">${order.quantity} x Rp ${formatPrice(order.price)}</div>
            </div>
        </div>
        <div class="order-total">Total: Rp ${formatPrice(order.totalPrice)}</div>
        <div class="order-address">
            <strong>Alamat Pengiriman:</strong>
            ${order.address}
        </div>
        <div class="order-address">
            <strong>Lokasi GPS:</strong>
            Latitude: ${order.lat} | Longitude: ${order.lng}
            <button type="button" class="btn btn-small" style="margin-top: 10px;" onclick="showOrderMap('${order.lat}', '${order.lng}')">Lihat Peta</button>
        </div>
    `;

    return card;
}

function showOrderMap(lat, lng) {
    const content = `
<p><strong>Latitude:</strong> ${lat}</p>
<p><strong>Longitude:</strong> ${lng}</p>
`;
    showModal('Lokasi Pengiriman', content, [
        { label: 'Buka Google Maps', class: 'btn btn-primary', onClick: () => { window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank'); } },
        { label: 'Tutup', class: 'btn btn-secondary' }
    ]);
}

// ==========================================
// Admin Panel
// ==========================================

function loadAdminPanel() {
    if (!isAdminMode) {
        showToast('Akses ditolak. Hanya admin yang bisa mengakses panel ini.', 'error');
        return;
    }

    loadAdminDashboard();
    loadProductsTable();
}

function loadAdminDashboard() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Calculate statistics
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => o.status === 'Pending').length;
    const completedOrders = orders.filter(o => o.status === 'Selesai').length;
    const uniqueCustomers = new Set(orders.map(o => o.customer || o.address)).size;
    
    // Update stats display
    document.getElementById('totalOrdersStat').textContent = totalOrders;
    document.getElementById('pendingOrdersStat').textContent = pendingOrders;
    document.getElementById('completedOrdersStat').textContent = completedOrders;
    document.getElementById('totalCustomersStat').textContent = uniqueCustomers;
    
    // Display pending orders
    loadPendingOrders();
}

function loadPendingOrders() {
    const container = document.getElementById('pendingOrdersContainer');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const pendingOrders = orders.filter(o => o.status === 'Pending');
    
    container.innerHTML = '';
    
    if (pendingOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-check"></i><p>Tidak ada pesanan yang belum diproses</p></div>';
        return;
    }
    
    const table = document.createElement('table');
    table.className = 'orders-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>No. Pesanan</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Total Harga</th>
                <th>Alamat</th>
                <th>Tanggal</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            ${pendingOrders.map(order => `
                <tr>
                    <td><strong>${order.id}</strong></td>
                    <td>${order.productName}</td>
                    <td>${order.quantity}</td>
                    <td>Rp ${formatPrice(order.totalPrice)}</td>
                    <td>${order.address}</td>
                    <td>${order.date}</td>
                    <td>
                        <button class="btn btn-small btn-success" onclick="completeOrder('${order.id}')">Selesai</button>
                        <button class="btn btn-small btn-info" onclick="viewOrderDetail('${order.id}')">Detail</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.appendChild(table);
}

function completeOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (order) {
        order.status = 'Selesai';
        localStorage.setItem('orders', JSON.stringify(orders));
        showToast('Pesanan berhasil ditandai selesai!', 'success');
        loadAdminDashboard();
    }
}

function viewOrderDetail(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (order) {
        const detail = `
DETAIL PESANAN
===============
No. Pesanan: ${order.id}
Produk: ${order.productName}
Jumlah: ${order.quantity}
Harga Satuan: Rp ${formatPrice(order.price)}
Total Harga: Rp ${formatPrice(order.totalPrice)}

ALAMAT PENGIRIMAN
=================
${order.address}

LOKASI GPS
==========
Latitude: ${order.lat}
Longitude: ${order.lng}

Tanggal Pesanan: ${order.date}
Status: ${order.status}
        `;
        showModal('Detail Pesanan', `<pre style="white-space:pre-wrap">${detail}</pre>`, [{ label: 'Tutup', class: 'btn btn-secondary' }]);
    }
}

function toggleProductManagement() {
    const section = document.getElementById('productManagementSection');
    const icon = document.getElementById('productMgmtIcon');
    
    if (section.style.display === 'none') {
        section.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        section.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function loadProductsTable() {
    const tableBody = document.getElementById('productsTableBody');
    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;

    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>Rp ${formatPrice(product.price)}</td>
            <td>${product.stock}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-warning" onclick="openEditModal(${product.id})"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i> Hapus</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function handleAddProduct(e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    
    // Get image from file or URL
    const imageFile = document.getElementById('productImageFile').files[0];
    const imageUrl = document.getElementById('productImageUrl').value;
    let image = null;

    if (!name || !category || !price || stock === '') {
        showToast('Semua field harus diisi!', 'warn');
        return;
    }

    // Check if image is selected
    if (!imageFile && !imageUrl) {
        showToast('Pilih atau upload gambar produk!', 'warn');
        return;
    }

    // Use file if uploaded, otherwise use URL
    if (imageFile) {
        image = document.getElementById('addImagePreviewImg').src;
    } else if (imageUrl) {
        image = imageUrl;
    }

    if (!image) {
        showToast('Gagal memproses gambar!', 'error');
        return;
    }

    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    const newId = Math.max(...products.map(p => p.id), 0) + 1;

    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: price,
        stock: stock,
        image: image
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    showToast('Produk berhasil ditambahkan!', 'success');
    document.getElementById('addProductForm').reset();
    document.getElementById('addImagePreviewImg').style.display = 'none';
    document.getElementById('productImageUrl').value = '';
    loadProductsTable();
    loadHomePage();
}

function openEditModal(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    const product = products.find(p => p.id === productId);

    if (!product) return;

    document.getElementById('editProductId').value = product.id;
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductStock').value = product.stock;
    
    // Set image preview
    const editImgPreview = document.getElementById('editImagePreviewImg');
    editImgPreview.src = product.image;
    editImgPreview.style.display = 'block';
    editImgPreview.onerror = function() {
        this.style.display = 'none';
    };

    // Clear input fields
    document.getElementById('editProductImageFile').value = '';
    document.getElementById('editProductImageUrl').value = '';

    document.getElementById('editModal').classList.add('active');
}

function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
    document.getElementById('editForm').reset();
}

function handleEditProduct(e) {
    e.preventDefault();

    const productId = parseInt(document.getElementById('editProductId').value);
    const name = document.getElementById('editProductName').value;
    const price = parseInt(document.getElementById('editProductPrice').value);
    const stock = parseInt(document.getElementById('editProductStock').value);

    const imageFile = document.getElementById('editProductImageFile').files[0];
    const imageUrl = document.getElementById('editProductImageUrl').value;

    const products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    const product = products.find(p => p.id === productId);

    if (!product) {
        showToast('Produk tidak ditemukan!', 'error');
        return;
    }

    product.name = name;
    product.price = price;
    product.stock = stock;

    // Update image if new one is selected
    if (imageFile) {
        product.image = document.getElementById('editImagePreviewImg').src;
    } else if (imageUrl) {
        product.image = imageUrl;
    }
    // else keep the existing image

    localStorage.setItem('products', JSON.stringify(products));

    showToast('Produk berhasil diupdate!', 'success');
    closeEditModal();
    loadProductsTable();
    loadHomePage();
}

function deleteProduct(productId) {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
        return;
    }

    let products = JSON.parse(localStorage.getItem('products')) || dummyProducts;
    products = products.filter(p => p.id !== productId);
    localStorage.setItem('products', JSON.stringify(products));

    showToast('Produk berhasil dihapus!', 'success');
    loadProductsTable();
    loadHomePage();
}

// ==========================================
// Utility Functions
// ==========================================

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

// Image Preview Functions
function previewImage(file, imgElementId, previewContainerId) {
    if (!file) return;

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        showToast('Ukuran file terlalu besar! Maksimal 2MB', 'warn');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.getElementById(imgElementId);
        imgElement.src = e.target.result;
        imgElement.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function previewImageUrl(url, imgElementId, previewContainerId) {
    if (!url) return;

    const imgElement = document.getElementById(imgElementId);
    imgElement.src = url;
    imgElement.onload = function() {
        imgElement.style.display = 'block';
    };
    imgElement.onerror = function() {
        showToast('Gambar tidak dapat dimuat. Cek URL dan coba lagi.', 'error');
        imgElement.style.display = 'none';
    };
}

// Tab Switching Functions
function switchImageTab(tabName) {
    // Hide all tabs
    document.getElementById('uploadTab').classList.remove('active');
    document.getElementById('linkTab').classList.remove('active');
    
    // Remove active class from all buttons
    document.querySelectorAll('#addProductForm .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    if (tabName === 'upload') {
        document.getElementById('uploadTab').classList.add('active');
        document.querySelectorAll('#addProductForm .tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('linkTab').classList.add('active');
        document.querySelectorAll('#addProductForm .tab-btn')[1].classList.add('active');
    }
}

function switchEditImageTab(tabName) {
    // Hide all tabs
    document.getElementById('editUploadTab').classList.remove('active');
    document.getElementById('editLinkTab').classList.remove('active');
    
    // Remove active class from all buttons
    document.querySelectorAll('#editForm .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    if (tabName === 'upload') {
        document.getElementById('editUploadTab').classList.add('active');
        document.querySelectorAll('#editForm .tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('editLinkTab').classList.add('active');
        document.querySelectorAll('#editForm .tab-btn')[1].classList.add('active');
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const editModal = document.getElementById('editModal');

    if (event.target === cartModal) {
        closeCartModal();
    }

    if (event.target === editModal) {
        closeEditModal();
    }
}
