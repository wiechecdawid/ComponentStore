if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
} else {
    ready()
}

function ready() {
    var removeButtons = document.getElementsByClassName('remove');
    for(let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeCartItem);
    }
    
    var quantityInputs = document.getElementsByClassName('quantity');
    for(let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', updateCartTotal);
    }

    //showAllItems();

    if(document.getElementsByClassName('purchase') != null) {
        updateCartTotal();
    }
}

function removeCartItem (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    console.log('One item removed from the cart.');
   // saveAllCartItems();
    updateCartTotal();
}

var addButtons = document.getElementsByClassName('add');
for(let i = 0; i < addButtons.length; i++)
{
    addButtons[i].addEventListener('click', addToCart)
}

function addToCart(event) {
    let buttonClicked = event.target;
        let chosenItem = buttonClicked.parentElement;
        let name = chosenItem.querySelector('h2').innerText;
        let price = chosenItem.getElementsByClassName('price')[0].innerText;
        
        let items = document.getElementsByClassName('items')[0];
        let purchase = document.createElement('div');
        purchase.className = 'purchase';
        items.appendChild(purchase);

        let itemName = document.createElement('div');
        itemName.className = 'itemName';
        itemName.textContent = name;
        purchase.appendChild(itemName);

        unitPrice = document.createElement('div');
        unitPrice.className = 'price';
        unitPrice.textContent = price;
        purchase.appendChild(unitPrice);

        let quantity = document.createElement('input');
        quantity.className = 'quantity';
        quantity.type = 'number';
        quantity.value = 1;
        quantity.min = 1;
        quantity.max = 10;
        quantity.addEventListener('change', updateCartTotal);
        purchase.appendChild(quantity);

        let remove = document.createElement('div');
        remove.className = 'remove';
        remove.innerHTML = '&times;';
        remove.addEventListener('click', removeCartItem);
        purchase.appendChild(remove);

        updateCartTotal();
        // saveAllCartItems();
}

function updateCartTotal() {
    let cartItems = document.getElementsByClassName('items')[0];
    let rows = cartItems.getElementsByClassName('purchase');
    let sum = 0;
    for(let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let priceDiv = row.getElementsByClassName('price')[0];
        let qtyDiv = row.getElementsByClassName('quantity')[0];
        let quantity = qtyDiv.value;
        let price = parseFloat(priceDiv.innerText.replace(',', '.'));

        sum += quantity * price;
    }
    document.getElementsByClassName('total')[0].innerText = ((Math.round(sum*100)/100).toFixed(2)).toString().replace('.',',');
}

// function saveAllCartItems() {
//     let items = document.getElementsByClassName('items')[0];
//     localStorage.setItem('items', items.innerHTML);
// }

// function showAllItems() {
//     let items = document.getElementsByClassName('items')[0];
//     let savedItems = localStorage.getItem('items');
//     if(savedItems != null) {
//         items.innerHTML = savedItems;
//     }
// }
