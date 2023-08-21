
let number = 0;
function handleFirstCard() {
    const itemElement = document.getElementById('firstCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('firstCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}

function handleSecondCard() {
    const itemElement = document.getElementById('secondCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('secondCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}

function handleThirdCard() {
    const itemElement = document.getElementById('thirdCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('thirdCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}
function handleFourthCard() {
    const itemElement = document.getElementById('fourthCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('fourthCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}
function handleFifthCard() {
    const itemElement = document.getElementById('fifthCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('fifthCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}
function handleSixthCard() {
    const itemElement = document.getElementById('sixthCardName');
    const itemName = itemElement.innerText;
    setCardName(itemName)

    const firstCardAmount = getAmount('sixthCardAmount');
    const previousTotalPrice = getAmount('totalPrice');
    const newTotalPrice = previousTotalPrice + firstCardAmount;
    setTotalPrice(newTotalPrice, 'totalPrice');
    whenApplyEnable(newTotalPrice);
    whenPurchaseEnable(newTotalPrice)
}

function applyBtn() {
    const inputElement = document.getElementById('inputId');
    const inputString = inputElement.value;

    const couponElement = document.getElementById('couponName');
    const couponName = couponElement.innerText;

    if (inputString === couponName) {
        const totalPrice = getAmount('totalPrice');

        const discountAmount = 0.2 * totalPrice;
        const discount = document.getElementById('discountAmount');
        discount.innerText = discountAmount.toFixed(2);


        const totalPriceAmount = getAmount('totalPrice');
        const discountPrice = getAmount('discountAmount');
        const totalAmount = totalPriceAmount - discountPrice;

        const totalTaka = document.getElementById('totalAmount');
        totalTaka.innerText = totalAmount.toFixed(2);

    }
    else {
        console.log(false);
    }

}





