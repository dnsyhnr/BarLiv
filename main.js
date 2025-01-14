function openMenu() {
  // amik dr homepage file
  const content = document.querySelector(".content"); // Select the content element
  const sidebar = document.getElementById("sidebar");
  const iconMenu = document.querySelector(".icon-menu");
  const bigHeader = document.querySelector(".big-header");

  if (sidebar.style.width !== "200px") { // If the sidebar is not open
    sidebar.style.width = "200px"; // Open the sidebar
    content.classList.add("slide"); // Apply the slide effect to content
    iconMenu.classList.add("slide"); // Apply the slide effect to the icon menu
    bigHeader.classList.add("slide");
  } else {
    sidebar.style.width = "0"; // Close the sidebar
    content.classList.remove("slide"); // Remove the slide effect from content
    iconMenu.classList.remove("slide"); // Remove the slide effect from the icon menu
    bigHeader.classList.remove("slide");
  }
}

function toggleNotification() {
    var notificationContainer = document.getElementById("notificationContainer");
    var notificationButton = document.querySelector('.openNoti');

    if (notificationContainer.style.display === "none" || notificationContainer.style.display === "") {
        // Show the notification container and change the button color
        notificationContainer.style.display = "block";
        notificationButton.style.backgroundColor = "#1D201D"; // Set background color
    } else {
        // Hide the notification container and reset the button color
        notificationContainer.style.display = "none";
        notificationButton.style.backgroundColor = ""; // Reset to default
    }
}

// Function to toggle the category list visibility
function categoryList() {
  const categoryList = document.getElementById('list');
  const categoriesContainer = document.querySelector('.categories');

  // Toggle the category list display between "none" and "block"
  if (categoryList.style.display === "none" || categoryList.style.display === "") {
    categoryList.style.display = "block";
    categoriesContainer.style.backgroundColor = "#1D201D"; // Change background color of the container
  } else {
    categoryList.style.display = "none";
    categoriesContainer.style.backgroundColor = ""; // Reset to the original background color
  }
}

document.getElementById('filterCategory').addEventListener('change', function () {
    const selectedCategory = this.value;
    const allCards = document.querySelectorAll('.grid > div');

    allCards.forEach(card => {
        if (selectedCategory === 'all' || card.classList.contains(`card-${selectedCategory.toLowerCase()}`)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

//Function to search for a more specific product
function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    const cards = document.querySelectorAll('.grid .card-cookware, .grid .card-table, .grid .card-chair, .grid .card-wall, .grid .card-door, .grid .card-bed, .grid .card-lighting, .grid .card-garden, .grid .card-balcony');

    cards.forEach(function(card) {
        const name = card.querySelector('.name').textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');

        // Check if the card matches the search input and the selected category
        if ((name.includes(input) || input === "") && (category === "all" || category === cardCategory)) {
            card.style.display = 'block';  // Show the card
        } else {
            card.style.display = 'none';   // Hide the card
        }
    });
}

// Function to filter items based on completion status
function filterItems(status) {
    // Get all the items
    const items = document.querySelectorAll('.history-container .grid div');

    // Loop through each item and check its class
    items.forEach(item => {
        // If the item's class contains the status, show it, otherwise hide it
        if (status === 'all' || item.classList.contains(`item-${status}`)) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Event listener for dropdown change
document.getElementById('filterCategory').addEventListener('change', function() {
    const selectedStatus = this.value; // Get the selected filter option
    filterItems(selectedStatus); // Call the filter function with the selected status
});

function selectingAll(selectAllCheckbox) {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox'); // All item checkboxes

    // Set the checked state of all checkboxes to match the "Select All" checkbox
    itemCheckboxes.forEach(checkbox => (checkbox.checked = selectAllCheckbox.checked));

    // Update the cart summary after selection
    updateCartSummary();
}


function toggleStoreCheckbox(storeCheckbox) {
  // Get all item checkboxes under this store
  const store = storeCheckbox.closest('.store');
  const itemCheckboxes = store.querySelectorAll('.item-checkbox');

  // Set the checked state of all item checkboxes to match the store checkbox
  itemCheckboxes.forEach(checkbox => (checkbox.checked = storeCheckbox.checked));

  // Update the cart summary
  updateCartSummary();
}

function updateSelectAllState() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.item-checkbox'); // All item checkboxes

    // Check if all item checkboxes are checked
    const allChecked = [...itemCheckboxes].every(checkbox => checkbox.checked);

    // Update the "Select All" checkbox state
    selectAllCheckbox.checked = allChecked;
}



// Add event listeners to all checkboxes to update the cart summary
document.querySelectorAll('.item-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateCartSummary); // Update the summary on change
});


function showAddressAlert(fullName, address, city, postalCode, phoneNumber) {
  const content = `Shipping address saved:\n${fullName}\n${address}\n${city}, ${postalCode}\nPhone: ${phoneNumber}`;
  alert(content);  // Show the alert with the address details
}

// Function to collect data and call the alert
function saveAddress() {
  // Get the values entered by the user
  const fullName = document.getElementById("full-name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postal-code").value;
  const phoneNumber = document.getElementById("phone-number").value;

  // Call the alert function to display the entered address
  showAddressAlert(fullName, address, city, postalCode, phoneNumber);

  // Optionally, reset the form after saving the address
  document.getElementById("shipping-address-form").reset();
}


//Function Discount Section
function claimBtn() {
  // Get the button that was clicked
  const button = event.target;

  // Change the text inside the button
  button.innerText = "Claimed";

  alert(`The voucher is successfully claimed.`);

  // Optionally, disable the button after claiming
  button.disabled = true;
}

// Function to toggle the login sidebar visibility
function LoginList() {
    const sidebar = document.getElementById('list2');
    const categoriesContainer = document.querySelector('.login-icon');

    // Toggle the sidebar display between "none" and "block"
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block"; // Show the sidebar
        categoriesContainer.style.backgroundColor = "#1D201D"; // Optional: change background color when open
    } else {
        sidebar.style.display = "none"; // Hide the sidebar
        categoriesContainer.style.backgroundColor = ""; // Reset to the original background color
    }
}

// Function to enable editing the profile fields
function enableEdit() {
  const inputs = document.querySelectorAll('#name, #email, #phone, #status, #university');
  inputs.forEach(input => input.disabled = false); // Enable all fields
  document.getElementById('save-button').style.display = 'inline-block'; // Show Save button
}

// Function to save the profile
function saveProfile() {
  const inputs = document.querySelectorAll('#name, #email, #phone, #status, #university');
  inputs.forEach(input => input.disabled = true); // Disable all fields
  document.getElementById('save-button').style.display = 'none'; // Hide Save button
  alert('Profile saved!'); // Display save confirmation
}

// Add event listeners for buttons
document.getElementById('edit-button').addEventListener('click', enableEdit);
document.getElementById('save-button').addEventListener('click', saveProfile);

// Toggle the visibility of the password change form
function togglePasswordForm() {
  const passwordForm = document.getElementById('password-form');
  if (passwordForm.style.display === 'none' || passwordForm.style.display === '') {
    passwordForm.style.display = 'block';
  } else {
    passwordForm.style.display = 'none';
  }
}

// Toggle the visibility of the preferences form
function togglePreferencesForm() {
  const preferencesForm = document.getElementById('preferences-form');
  if (preferencesForm.style.display === 'none' || preferencesForm.style.display === '') {
    preferencesForm.style.display = 'block';
  } else {
    preferencesForm.style.display = 'none';
  }
}

//login required
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in both username and password.");
    } else {
      // Redirect to the profile page if both fields are filled
      window.location.href = 'homepage.html';
    }
  }

//Functions for cart.html
function orderAgain(itemName, itemPrice) {
  alert(`${itemName} has been added to your cart!`);

// Call addToCart function to store item in localStorage
  addToCart(itemName, itemPrice);
}

  // Function to update the cart summary based on selected items
function updateCartSummary() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      let totalItems = 0;
      let subtotalPrice = 0;
      const shippingFeePerItem = 10; // Example: RM 10 per item

      // Loop through cart items and update total and subtotal based on selected items
      cart.forEach(item => {
          const itemCheckbox = document.getElementById(`item-${item.name}`); // Correct template literal

          // Check if the item is selected (checkbox is checked)
          if (itemCheckbox && itemCheckbox.checked) {
              totalItems += item.quantity; // Add the item quantity to the total
              subtotalPrice += item.quantity * item.price; // Add the subtotal for that item
          }
      });

      // Check if the subtotal exceeds RM 10,000 for free shipping
      const shippingFee = subtotalPrice > 10000 ? 0 : totalItems * shippingFeePerItem;
      const totalPrice = subtotalPrice + shippingFee;

      // Update the displayed cart summary values
      document.querySelector('.total-items span').textContent = totalItems;  // Total number of items selected
      document.querySelector('.subtotal span').textContent = `RM ${subtotalPrice.toFixed(2)}`;  // Subtotal value
      document.querySelector('.shipping span').textContent = `RM ${shippingFee.toFixed(2)}`;  // Shipping fee
      document.querySelector('.total-price span').textContent = `RM ${totalPrice.toFixed(2)}`;  // Total price (including shipping)
}

  // Function to increment quantity of a specific item
function incrementQuantity(itemName) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cartItems.find(item => item.name === itemName);
  if (item) {
    item.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart(); // Update the cart display
    updateCartSummary(); // Update cart summary
  }
}

  // Function to decrement quantity of a specific item
function decrementQuantity(itemName) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cartItems.find(item => item.name === itemName);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart(); // Update the cart display
    updateCartSummary(); // Update cart summary
  }
}

// Function to handle the checkbox change and update the cart summary
function handleCheckboxChange() {
  updateCartSummary(); // Update the summary whenever a checkbox is checked/unchecked
}


    // Display cart and update summary
function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let cartContainer = document.getElementById('cart-items-container');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = ''; // Clear any existing content before displaying the cart items
    cartItems.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart-item">
      <input type="checkbox" class="item-checkbox" id="item-${item.name}" data-name="${item.name}" onchange="handleCheckboxChange()">
      <div class="cart-image">
        <img src="${item.image}" alt="${item.name}">
       </div>
      <div class="cart-details">
        <h4>${item.name}</h4>
      </div>
      <div class="cart-price-and-actions">
        <div class="cart-price">
          <p>RM <span class="price">${item.price}</span></p>
        </div>
      </div>
      <div class="cart-quantity">
        <button class="quantity-btn" onclick="decrementQuantity('${item.name}')">-</button>
        <input type="number" value="${item.quantity}" min="1" readonly />
        <button class="quantity-btn" onclick="incrementQuantity('${item.name}')">+</button>
      </div>
      </div>
  `;
  });
  }
}

  // Function to add the item to the cart
function addToCart(itemName, itemPrice) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Check if item already exists and update quantity, otherwise add new item
  const existingItem = cartItems.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1; // If the item is already in the cart, increase the quantity
  } else {
    const item = {
      name: itemName,
      price: itemPrice,
      quantity: 1, // Initialize with 1 if it's the first time the item is added
      image: 'item_image_url' // Replace with actual image URL
    };
    cartItems.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems)); // Save updated cart
  displayCart(); // Update the cart display
  updateCartSummary(); // Update the cart summary
}

// Function to update the "Select All" checkbox state
function updateSelectAllState() {
  const selectAllCheckbox = document.getElementById('selectAll');
  const itemCheckboxes = document.querySelectorAll('.item-checkbox'); // All item checkboxes

// Check if all item checkboxes are checked
  const allChecked = [...itemCheckboxes].every(checkbox => checkbox.checked);

// Update the "Select All" checkbox state
  selectAllCheckbox.checked = allChecked;
}

function handleSelectAllChange() {
  const selectAllCheckbox = document.getElementById('selectAll');
  const itemCheckboxes = document.querySelectorAll('.item-checkbox'); // All item checkboxes

      // Check or uncheck all items based on "Select All" checkbox state
  itemCheckboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });

  updateCartSummary(); // Update the summary based on the new checkbox states
}

document.getElementById('selectAll').addEventListener('change', handleSelectAllChange);

  // Use a single `window.onload` or `DOMContentLoaded`
document.addEventListener('DOMContentLoaded', function() {
  displayCart();  // Display cart on page load
  updateSelectAllState(); // Ensure the "Select All" checkbox is synced with item checkboxes on load
});
