
const defaultProducts = [
  { id: '1', name: 'Tomatoes', category: 'vegetable', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576765/tomato_iylnqu.webp' },
  { id: '2', name: 'Strawberries', category: 'fruit', price: 120.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775570013/strawberry_v8wiha.webp' },
  { id: '3', name: 'Carrots', category: 'vegetable', price: 30.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576780/carrot_jfcifw.jpg' },
  { id: '4', name: 'Apples', category: 'fruit', price: 150.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775570364/apples_q9do2a.jpg' },
  { id: '5', name: 'Green Bell Peppers', category: 'vegetable', price: 50.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576804/green_bell_peppers_svcygr.jpg' },
  { id: '6', name: 'Lemons', category: 'fruit', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775570460/lemons-tree_akqegt.webp' },
  { id: '7', name: 'Bananas', category: 'fruit', price: 60.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775571785/banana_ix3fgk.avif' },
  { id: '8', name: 'Broccoli', category: 'vegetable', price: 80.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576832/brocolli_fqj1ha.webp' },
  { id: '9', name: 'Watermelon', category: 'fruit', price:40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775571764/watermelon_y3wyjm.jpg' },
  { id: '10', name: 'Spinach', category: 'vegetable', price: 25.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576840/spinach_vp8fr7.jpg' },
  { id: '11', name: 'Oranges', category: 'fruit', price: 90.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775574579/oranges2_ob114e.jpg' },
  { id: '12', name: 'Red Onions', category: 'vegetable', price: 35.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576899/red_onions_kx72tg.jpg' },
  { id: '13', name: 'Mangoes', category: 'fruit', price: 100.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573713/mangos_c0jlt4.jpg' },
  { id: '14', name: 'Cucumbers', category: 'vegetable', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576934/cucumber_zmdpou.jpg' },
  { id: '15', name: 'Blueberries', category: 'fruit', price: 250.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775591033/blueberry_ccynf7.webp' },
  { id: '16', name: 'Potatoes', category: 'vegetable', price: 30.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775576997/potato_zs4mlt.jpg' },
  { id: '17', name: 'Pineapple', category: 'fruit', price: 80.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775571745/pine_apple_kp1ku4.webp' },
  { id: '18', name: 'Custard Apple', category: 'fruit', price: 120.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775572051/custard_apple2_ea5oa3.webp' },
  { id: '19', name: 'Papaya', category: 'fruit', price: 50.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573857/papaya_hmkxxm.jpg' },
  { id: '20', name: 'Musk Melon', category: 'fruit', price: 45.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573846/musk_melon_wotnx9.jpg' },
  { id: '21', name: 'Guava', category: 'fruit', price: 60.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775574226/guava_otbzrd.jpg' },
  { id: '22', name: 'Sapota', category: 'fruit', price: 70.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573831/sopata_ixfdw5.jpg' },
  { id: '23', name: 'Pomegranate', category: 'fruit', price: 180.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573815/pomegranate_ijqccw.jpg' },
  { id: '24', name: 'Green Chillies (Mirchi)', category: 'vegetable', price: 60.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577048/green_chlli_xr7oz1.webp' },
  { id: '25', name: 'Fresh Coriander', category: 'vegetable', price: 20.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577100/coriander_bhempi.webp' },
  { id: '26', name: 'Brinjal', category: 'vegetable', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577111/brinjal_eikzgw.jpg' },
  { id: '27', name: 'Cauliflower', category: 'vegetable', price: 45.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577129/cauliflower_hciz6b.jpg' },
  { id: '28', name: 'Beetroot', category: 'vegetable', price: 50.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577137/beetroot_ttoop0.jpg' },
  { id: '29', name: 'Celery', category: 'vegetable', price: 55.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577149/celery_jg1phk.webp' },
  { id: '30', name: 'Sweet Corn', category: 'vegetable', price: 30.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577158/sweet_corn_y4imi4.jpg' },
  { id: '31', name: 'Ginger', category: 'vegetable', price: 120.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577190/ginger_vsqszp.jpg' },
  { id: '32', name: 'Button Mushrooms', category: 'vegetable', price: 150.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577202/mushrooms_sbp0mm.webp' },
  { id: '33', name: 'Cabbage', category: 'vegetable', price: 30.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577210/cabbage_i52n5g.avif' },
  { id: '34', name: 'Green Peas', category: 'vegetable', price: 80.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577283/green_peas_rxrc9b.webp' },
  { id: '35', name: 'Asparagus', category: 'vegetable', price: 200.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577294/aspagarus_bw46n8.webp' },
  { id: '36', name: "Lady's Finger (Okra)", category: 'vegetable', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577329/ladys_finger_qzllol.jpg' },
  { id: '37', name: 'Bottle Gourd', category: 'vegetable', price: 35.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577352/bottle_gourd_hzoggl.jpg' },
  { id: '38', name: 'Garlic', category: 'vegetable', price: 150.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577359/garlic_p7udac.jpg' },
  { id: '39', name: 'Radish', category: 'vegetable', price: 30.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577401/radish_edgwe6.webp' },
  { id: '40', name: 'Bitter Gourd', category: 'vegetable', price: 50.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577415/bitter_gourd_uhkvsn.jpg' },
  { id: '41', name: 'Ridge Gourd', category: 'vegetable', price: 45.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577424/ridge_gourd_w5o7kd.webp' },
  { id: '42', name: 'Red Grapes', category: 'fruit', price: 140.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775574290/red_grapes_tuamge.jpg' },
  { id: '43', name: 'Kiwi', category: 'fruit', price: 200.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573783/kiwi_lonqfe.jpg' },
  { id: '44', name: ' Cherries', category: 'fruit', price: 350.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775574417/sweet_cherry_lpi3cz.jpg' },
  { id: '45', name: 'Green Pears', category: 'fruit', price: 130.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573771/pears_ejvcox.jpg' },
  { id: '46', name: 'Ripe Peaches', category: 'fruit', price: 160.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573760/ripe_peaches_rlylfu.jpg' },
  { id: '47', name: 'Raspberries', category: 'fruit', price: 400.0, image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=600&q=80' },
  { id: '48', name: 'Dragon Fruit', category: 'fruit', price: 220.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573748/dragon_fruit_yra0kz.webp' },
  { id: '49', name: 'Coconut', category: 'fruit', price: 55.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573739/coconut_cfbokq.png' },
  { id: '50', name: 'Avocado', category: 'fruit', price: 280.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775573728/avocado_gorwuh.jpg' },
  { id: '51', name: 'Zucchini', category: 'vegetable', price: 55.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577466/zucchini_jeqdxv.jpg' },
  { id: '52', name: 'Curly Kale', category: 'vegetable', price: 90.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577484/curly_kale_ucbcmb.jpg' },
  { id: '53', name: 'Pumpkin', category: 'vegetable', price: 40.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577490/Pumkin_cj7vao.png' },
  { id: '54', name: 'Romaine Lettuce', category: 'vegetable', price: 45.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577511/romain_lettuce_faswpg.jpg' },
  { id: '55', name: 'Leeks', category: 'vegetable', price: 70.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577526/leeks_vszj2v.jpg' },
  { id: '56', name: 'Swiss Chard', category: 'vegetable', price: 85.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577543/swiss_chard_z2prmd.jpg' },
  { id: '57', name: 'Butternut Squash', category: 'vegetable', price: 50.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577560/butternut_squash_uulyd5.jpg' },
  { id: '58', name: 'Fresh Fennel', category: 'vegetable', price: 95.0, image: 'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775577567/fennel_lwouqk.jpg' },
  {id: '59', name:'spring onions',category:'vegetable',price:30.0,image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775578921/spring_onions_t6jdaf.avif'},
  {id:'60', name:'cashew buts', category:'dryfruit', price:500.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579904/cashew_nuts_v9rgoy.webp'},
  {id:'61', name:'almonds', category:'dryfruit', price:400.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579920/almonds_i6kzy3.jpg'},
  {id:'62', name:'walnuts', category:'dryfruit', price:600.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579945/walnuts_viveay.jpg'},
  {id:'63', name:'pistachios', category:'dryfruit', price:550.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579962/pistachios_dxoyko.jpg'},
  {id:'64', name:'hazelnuts', category:'dryfruit', price:450.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579979/hazelnuts_r4jvl1.jpg'},
  {id:'65', name:'pecans', category:'dryfruit', price:650.0, image:'https://res.cloudinary.com/dw7zzc2qy/image/upload/v1775579997/pecans_gw2rgf.jpg'},
]

// State Initialization
let products = JSON.parse(localStorage.getItem('products')) || [];

// Merge default products to ensure new additions appear
defaultProducts.forEach(dp => {
  const existing = products.find(p => p.id === dp.id);
  if (!existing) {
    products.push(dp);
  } else {
    existing.name = dp.name; // Update name if changed
    existing.price = dp.price; // Update in case of old USD prices
    existing.image = dp.image; // Overwrite placeholders with dynamic images
  }
});
localStorage.setItem('products', JSON.stringify(products));

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const fruitList = document.getElementById('fruit-list');
const vegetableList = document.getElementById('vegetable-list');
const dryfruitList = document.getElementById('dryfruit-list');
const cartCount = document.getElementById('cart-count');
const addProductForm = document.getElementById('add-product-form');
const cartItemsContainer = document.getElementById('cart-items-container');

// --- Helper Functions ---
const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));
const saveProducts = () => localStorage.setItem('products', JSON.stringify(products));
const updateCartCount = () => {
  if (cartCount) {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
};

// --- Rendering Home Page Products ---
const renderProducts = () => {
  if (fruitList) fruitList.innerHTML = '';
  if (vegetableList) vegetableList.innerHTML = '';
  if (dryfruitList) dryfruitList.innerHTML ='';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-badge">${product.category}</div>
      <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">₹${Number(product.price).toFixed(2)} / kg</p>
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 10px;">
           <label style="font-size:0.9rem; color:#666;" for="qty-${product.id}">Qty (kg):</label>
           <input type="number" id="qty-${product.id}" value="1" min="0.5" step="0.5" style="width:70px; padding:0.3rem; border:1px solid #ccc; border-radius:4px; text-align:center;">
        </div>
        <button class="btn btn-primary btn-block" onclick="addToCart('${product.id}')">Add to Cart</button>
      </div>
    `;

    if (product.category === 'fruit' && fruitList) {
      fruitList.appendChild(card);
    } else if (product.category === 'vegetable' && vegetableList) {
      vegetableList.appendChild(card);
    } else if (product.category === 'dryfruit' && dryfruitList) {
      dryfruitList.appendChild(card);
    }
  });
};

window.scrollToProduct = (searchName) => {
  const cards = document.querySelectorAll('.product-card');
  const matchingCard = Array.from(cards).find(card => {
    const title = card.querySelector('.product-title');
    return title && title.textContent.toLowerCase().includes(searchName.toLowerCase());
  });

  if (matchingCard) {
    matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    matchingCard.classList.add('highlight-flash');
    setTimeout(() => {
      matchingCard.classList.remove('highlight-flash');
    }, 1800);
  } else {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Adding to Cart ---
window.addToCart = (id) => {
  const product = products.find(p => p.id === id);
  const existingItem = cart.find(item => item.id === id);
  const qtyInput = document.getElementById(`qty-${id}`);
  const addedQuantity = qtyInput ? parseFloat(qtyInput.value) : 1;

  if (existingItem) {
    existingItem.quantity += addedQuantity;
  } else {
    cart.push({ ...product, quantity: addedQuantity });
  }

  saveCart();
  updateCartCount();

  // Show a mini feedback notification
  alert(`${addedQuantity}kg of ${product.name} added to cart!`);
};

// --- Farmer Portal Logic ---
if (addProductForm) {
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: document.getElementById('productName').value,
      category: document.getElementById('productCategory').value,
      price: parseFloat(document.getElementById('productPrice').value),
      image: document.getElementById('productImage').value,
    };

    products.push(newProduct);
    saveProducts();

    const successMsg = document.getElementById('form-success');
    successMsg.classList.remove('hidden');
    addProductForm.reset();

    setTimeout(() => {
      successMsg.classList.add('hidden');
    }, 3000);
  });
}

// --- Cart Page Logic ---
const renderCart = () => {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added any fresh produce yet.</p>
        <a href="index.html" class="btn btn-primary">Start Shopping</a>
      </div>
    `;
    document.getElementById('cart-subtotal').textContent = '₹0.00';
    document.getElementById('cart-tax').textContent = '₹0.00';
    document.getElementById('cart-total').textContent = '₹0.00';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100?text=Image'">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <p class="cart-item-price">₹${Number(item.price).toFixed(2)}</p>
      </div>
      <div class="cart-actions" style="text-align: right;">
        <div class="qty-controls" style="display:flex; align-items:center; justify-content:flex-end; gap:10px; margin-bottom: 10px;">
           <button class="btn" style="padding: 0.2rem 0.5rem; background: #eee; color: #333;" onclick="updateQty(${index}, -1)">-</button>
           <span style="font-weight: bold; width: 20px; text-align: center;">${item.quantity}</span>
           <button class="btn" style="padding: 0.2rem 0.5rem; background: #eee; color: #333;" onclick="updateQty(${index}, 1)">+</button>
        </div>
        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  document.getElementById('cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('cart-tax').textContent = `₹${tax.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `₹${total.toFixed(2)}`;
};

window.updateQty = (index, change) => {
  if (cart[index].quantity + change <= 0) {
    removeFromCart(index);
  } else {
    cart[index].quantity += change;
    saveCart();
    updateCartCount();
    renderCart();
  }
};

window.removeFromCart = (index) => {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (fruitList || vegetableList) renderProducts();
  if (cartItemsContainer) renderCart();

  // Form submission for Checkout Page
  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    // Calculate total for checkout page display
    let checkSubtotal = 0;
    cart.forEach(i => checkSubtotal += i.price * i.quantity);
    const totalPay = checkSubtotal + checkSubtotal * 0.08; // with tax
    const totalSpan = document.getElementById('checkout-total');
    if (totalSpan) totalSpan.textContent = `₹${totalPay.toFixed(2)}`;

    paymentForm.addEventListener('submit', evt => {
      evt.preventDefault();
      if (cart.length === 0) {
        alert('Your cart is empty! Add products before paying.');
        return;
      }
      const successDiv = document.getElementById('checkout-success');
      successDiv.classList.remove('hidden');
      paymentForm.reset();
      cart = [];
      saveCart();
      updateCartCount();
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    });
  }
});
