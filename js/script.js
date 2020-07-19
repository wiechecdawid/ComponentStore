var removeButtons = document.getElementsByClassName('remove');
for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', (event) => {
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        console.log('One item removed from the cart.');
        updateCartTotal();
    })
};

var quantityInputs = document.getElementsByClassName('quantity');

var addButtons = document.getElementsByClassName('add');
for(let i = 0; i < addButtons.length; i++)
{
    addButtons[i].addEventListener('click', event => {
        let buttonClicked = event.target;
        let chosenItem = buttonClicked.parentElement;
        let itemName = chosenItem.querySelector('h2').innerText;
        let price = chosenItem.getElementsByClassName('price')[0].innerText;

    })
}

function updateCartTotal() {
    var cartItems = document.getElementsByClassName('purchase');
    var sum = 0;
    for(let i = 0; i < cartItems.length; i++)
    {
        sum += cartItems.getElementsByClassName('price')[0] * cartItems.getElementsByClassName('quantity')[0]
    }
}

function checkBrowser() {
    if(localStorage in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

function showAllItems() {
    if(checkBrowser()){
        var key = "";
        var list = "";
        
        for(let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
        }
    }
}