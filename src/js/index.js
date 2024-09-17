window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product');
        buttons = document.querySelectorAll('button');
        openBtn = document.querySelector('.open');

    function createCard() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');  
        
        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';


        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }
    createCard();



    let field = document.querySelector('.cart-field');
    let cart = document.querySelector('.cart');
    let closeBtn = document.querySelector('.close');
   
    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }  

    openBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);


    buttons.forEach(function(item, i) {
        item.addEventListener('click',function() {
            let item = products[i].cloneNode(true);
                btn = item.querySelector('button');
                
            btn.remove();
            field.appendChild(item);
            products[i].remove();
    
    });
    })
},

    
    
);
   


