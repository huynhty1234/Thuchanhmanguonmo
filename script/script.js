let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.price1');
let totalicon = document.querySelector('.quantityicon');
let quantity = document.querySelector('.quantity');
let btnthanhtoan=document.querySelector('.btnthanhtoan');
let showcart = document.querySelector('.show');
let products = [
    {
        id: 1,
        name: 'POODLE',
        image: 'img/pooddle.jpg',
        price: 7000000
    },
    {
        id: 2,
        name: 'HUSKY',
        image: 'img/husky.jpg',
        price: 12000000
    },
    {
        id: 3,
        name: 'SHIBA',
        image: 'img/shiba.jpg',
        price: 20000000
    },
    {
        id: 4,
        name: 'CORGI',
        image: 'img/corgi.jpg',
        price: 8000000
    },
    {
        id: 5,
        name: 'GOLDEN',
        image: 'img/golden.jpg',
        price: 8000000
    },
    {
        id: 6,
        name: 'SAMOYED',
        image: 'img/Samoyed.jpg',
        price: 12000000
    },
    {
        id: 7,
        name: 'TAM THỂ',
        image: 'img/tamthe.jpg',
        price: 3000000
    },
    {
        id: 8,
        name: 'MÈO GOLDEN',
        image: 'img/goldencat.jpg',
        price: 25000000
    },
    {
        id: 9,
        name: 'TAI CỤP',
        image: 'img/taicup.jpg',
        price: 5000000
    },
    {
        id: 10,
        name: 'ANH XÁM',
        image: 'img/meoanh.jpg',
        price: 2500000
    },
    {
        id: 11,
        name: "BA TƯ",
        image: 'img/batu.jpg',
        price: 8000000
    },
    {
        id: 12,
        name: 'XIÊM',
        image: 'img/xiem.jpg',
        price: 3000000
    },
    {
        id: 13,
        name: 'HẠT CÚN',
        image: 'img/doancho1.jpg',
        price: 160000
    },
    {
        id: 14,
        name: 'PATE CÚN',
        image: 'img/doancho2.jpg',
        price: 20000
    },
    {
        id: 15,
        name: 'HẠT MÈO',
        image: 'img/doanmeo2.png',
        price: 150000
    },
    {
        id: 16,
        name: 'PATE MÈO',
        image: 'img/doanmeo1.png',
        price: 50000
    },
    {
        id: 17,
        name: 'DOG TOY',
        image: 'img/dogtoy.jpg',
        price: 20000
    },
    {
        id: 18,
        name: 'CAT TOY',
        image: 'img/cattoy.jpg',
        price: 20000
    },

];
let listCards = [];
function bouncer(arr) {
    return arr.filter(Boolean);
  }
function loadin(){
    if(window.localStorage.getItem("listcards") != null){
        listCards=bouncer(JSON.parse(window.localStorage.getItem("listcards")));
        reloadCard();
    }
}
function loadinthanhtoan(){
    if(window.localStorage.getItem("listcards") != null){
        listCards=bouncer(JSON.parse(window.localStorage.getItem("listcards")));
        reloadCardthanhtoan();
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            let newDiv = document.createElement('tr');
            newDiv.innerHTML = `
                    <td class="d-flex" style="align-items: center;"><img id="anh" style="width: 100px; border: 0 5px; margin-top: 10px;" src="${value.image}" alt=""><span class="title m-lg-2" >${value.name}</span></td>
                    <td ><p class="mb-0"><span class="price"  style="color: black">${value.price.toLocaleString()}</span><sup  style="color: black">đ</sup></p></td>
                    <td><button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button></td>
                    <td class="count" >${value.quantity}</td>
                    <td><button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></td>
                <br>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    totalicon.innerText = totalPrice.toLocaleString();
    window.localStorage.setItem("listcards", JSON.stringify(listCards));
    checkvo();
}
function reloadCardthanhtoan() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            let newDiv = document.createElement('tr');
            newDiv.innerHTML = `
                    <td class="d-flex" style="align-items: center;"><img style="width: 100px; border: 0 5px; margin-top: 10px;" src="${value.image}" alt=""><span class="title m-lg-2">${value.name}</span></td>
                    <td ><p class="mb-0"><span class="price"  style="color: black">${value.price.toLocaleString()}</span><sup  style="color: black">đ</sup></p></td>
                    <td><button onclick="changeQuantitythanhtoan(${key}, ${value.quantity - 1})">-</button></td>
                    <td>${value.quantity}</td>
                    <td><button onclick="changeQuantitythanhtoan(${key}, ${value.quantity + 1})">+</button></td>
                <br>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    window.localStorage.setItem("listcards", JSON.stringify(listCards));
    if (isEmpty(listCards)) {
        window.location.replace("index.html");
    }
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function changeQuantitythanhtoan(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCardthanhtoan();
}
function checkvo() {
    if (isEmpty(listCards)) {
        showcart.classList.add("d-none");
        btnthanhtoan.classList.add("disabled");
    }
    else {
        showcart.classList.remove("d-none");
        btnthanhtoan.classList.remove("disabled")
    }
}







function validateForm() {
        
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var adresse = adresseInput.value.trim();
    var num = numInput.value.trim() + "";
    var note = noteInput.value.trim();
    var email = emailInput.value.trim();

    var isValid = true;

    if (firstName === '') {
        firstNameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
        isValid = false;
    } else {
        firstNameErrorMessage.textContent = '';
    }

    if (lastName === '') {
        lastNameErrorMessage.textContent = 'Vui lòng nhập ho của bạn.';
        isValid = false;
    } else {
        lastNameErrorMessage.textContent = '';
    }


    if (adresse === '') {
        adresseErrorMessage.textContent = 'Vui lòng nhập dia chi của bạn.';
        isValid = false;
    } else {
        adresseErrorMessage.textContent = '';
    }

    if (num === '') {
        numErrorMessage.textContent = 'Vui lòng nhập so dien thoai của bạn.';
        isValid = false;
    } else if(isNaN(num)){
        numErrorMessage.textContent = 'Nhap sai dinh dang sdt.';
        isValid = false;
    }
    else if(num.length != 10){
        numErrorMessage.textContent = 'So dien thoai chi co 10 so.';
        isValid = false;
    }
    else{
        numErrorMessage.textContent = '';
    }
        

    if (note === '') {
        noteErrorMessage.textContent = 'Vui lòng nhập ghi chú của bạn.';
        isValid = false;
    } else {
        noteErrorMessage.textContent = '';
    }

    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }
    
    if (isValid) {
    }

}

function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

/*end dathang*/

function Form() {
        
    var Name = nameInput.value.trim();  
    var Email = emailInput.value.trim();
    var Text = TextareaInput.value.trim();

    var isValid = true;

    if (Name === '') {
        nameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
        isValid = false;
    } else {
        nameErrorMessage.textContent = '';
    }

    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập email của bạn.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }

    if (Text === '') {
        textErrorMessage.textContent = 'Vui lòng nhập góp ý của bạn.';
        isValid = false;
    } else {
        textErrorMessage.textContent = '';
    }

    if (isValid) {
    alert('Cảm ơn bạn đã góp ý với bọn mình!');
    }

}

function validateEmail(Email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(Email);
}
