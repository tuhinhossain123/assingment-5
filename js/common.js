function setCardName(itemName) {
    number += 1;
    const setCardNamesElements = document.getElementById('setNames');
    const p = document.createElement('p');
    p.innerText = `${number}. ${itemName}
    `
    setCardNamesElements.appendChild(p);
}

function getAmount(id) {
    const takaElement = document.getElementById(id);
    const takaElementString = takaElement.innerText;
    const taka = parseFloat(takaElementString);
    return taka;
}

function setTotalPrice(newTotalPrice, id) {
    const totalPrice = document.getElementById(id);
    totalPrice.innerText = newTotalPrice.toFixed(2);
}

function whenApplyEnable(newTotalPrice) {
    const applyBtn = document.getElementById('applyBtn');
    if (newTotalPrice >= 200) {
        applyBtn.removeAttribute('disabled')
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}
function whenPurchaseEnable(newTotalPrice) {
    const purchaseBtn = document.getElementById('purchaseBtn');
    if (newTotalPrice > 0) {
        purchaseBtn.removeAttribute('disabled')
    }
    else {
        purchaseBtn.setAttribute('disabled', true)
    }
}
function purchaseBtn() {
    location.reload();
   

}