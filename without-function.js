document.getElementById('first-class-plus').addEventListener('click', function () {
    // const firstClassInput = document.getElementById('first-class-input').value;
    // const firstClassCount = parseInt(firstClassInput);
    const firstClassCount = getInputValue('first-class-input');
    let firstClassNewCount = firstClassCount + 1;
    console.log(firstClassNewCount);

    document.getElementById('first-class-input').value = firstClassNewCount;
    calculateTotal();
    // const subTotalValue = document.getElementById('sub-total').innerText;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText;
    // const totalAmount = parseFloat(totalValue);

    // let total = firstClassNewCount * 150;
    // let vat = total * .1;
    // let grandTotal = total + vat;
    
    // const subTotalValue = document.getElementById('sub-total').innerText = total;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText = vat;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText = grandTotal;
    // const totalAmount = parseFloat(totalValue);

    // console.log(total);
    // console.log(vat);
    // console.log(grandTotal);


})

document.getElementById('first-class-minus').addEventListener('click', function () {
    // const firstClassInput = document.getElementById('first-class-input').value;
    // const firstClassCount = parseInt(firstClassInput);
    const firstClassCount = getInputValue('first-class-input');
    let firstClassNewCount = firstClassCount - 1;
    document.getElementById('first-class-input').value = firstClassNewCount;
    calculateTotal();
    // const subTotalValue = document.getElementById('sub-total').innerText = total;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText = vat;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText = grandTotal;
    // const totalAmount = parseFloat(totalValue);
})
//economy class

document.getElementById('economy-class-plus').addEventListener('click', function () {
    // const economyClassInput = document.getElementById('economy-class-input').value;
    // const economyClassCount = parseInt(economyClassInput);
    const economyClassCount = getInputValue('economy-class-input');
    let economyClassNewCount = economyClassCount + 1;
    console.log(economyClassNewCount);
    document.getElementById('economy-class-input').value = economyClassNewCount;
    calculateTotal();
    // const subTotalValue = document.getElementById('sub-total').innerText;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText;
    // const totalAmount = parseFloat(totalValue);

   
    
    // const subTotalValue = document.getElementById('sub-total').innerText = total;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText = vat;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText = grandTotal;
    // const totalAmount = parseFloat(totalValue);
})

document.getElementById('economy-class-minus').addEventListener('click', function () {
    // const economyClassInput = document.getElementById('economy-class-input').value;
    // const economyClassCount = parseInt(economyClassInput);
    const economyClassCount = getInputValue('economy-class-input');
    let economyClassNewCount = economyClassCount - 1;
    document.getElementById('economy-class-input').value = economyClassNewCount;
    calculateTotal();

    // let total1 = economyClassNewCount * 100;
    // let vat1 = total1 * .1;
    // let grandTotal1 = total1 + vat1;

    // const subTotalValue = document.getElementById('sub-total').innerText = total1;
    // const subTotalAmount = parseFloat(subTotalValue);

    // const vatTotalValue = document.getElementById('vat-total').innerText = vat1;
    // const vatTotalAmount = parseFloat(vatTotalValue);

    // const totalValue = document.getElementById('total').innerText = grandTotal1;
    // const totalAmount = parseFloat(totalValue);
})


document.getElementById('book-now').addEventListener('click', function () {
    const bookNow = document.getElementById('ticket');
    bookNow.style.display = 'none';
    const bookInfo = document.getElementById('ticket-booking-information');
    bookInfo.style.display = 'block';

    const flyingFromInput = document.getElementById('flying-from').value;
    const flyingToInput = document.getElementById('flying-to').value;
    const departureInput = document.getElementById('departure').value;
    const returnInput = document.getElementById('return').value;

    const firstClassInputCount =  getInputValue('first-class-input');
    const economyClassInputCount = getInputValue('economy-class-input');


    // const firstClassInput = document.getElementById('first-class-input').value;
    // const firstClassInputCount = parseInt(firstClassInput);
    // const economyClassInput = document.getElementById('economy-class-input').value;
    // const economyClassInputCount = parseInt(economyClassInput);

    let firstClassTicketPrice = firstClassInputCount * 150;
    let economyClassTicketPrice = economyClassInputCount * 100;
    let total = firstClassTicketPrice + economyClassTicketPrice;
    let vat = total * .1;
    let grandTotal = total + vat;
    
   


    document.getElementById('flying-from-value').innerHTML = flyingFromInput;
    document.getElementById('flying-to-value').innerHTML = flyingToInput;
    document.getElementById('departure-value').innerHTML = departureInput;
    document.getElementById('return-value').innerHTML = returnInput;
    document.getElementById('first-class-ticket').innerHTML = firstClassInputCount;
    document.getElementById('first-class-ticket-price').innerHTML = firstClassTicketPrice;
    document.getElementById('economy-class-ticket').innerHTML = economyClassInputCount;
    document.getElementById('economy-class-ticket-price').innerHTML = economyClassTicketPrice;
    document.getElementById('sub-total-amount').innerHTML = total;
    document.getElementById('vat-amount').innerHTML = vat;
    document.getElementById('total-amount').innerHTML = grandTotal;
    



})

function calculateTotal() {
    // const firstClassTicketInput = document.getElementById('first-class-input').value;
    // const firstClassTicketCount = parseInt(firstClassTicketInput);
    // const economyClassTicketInput = document.getElementById('economy-class-input').value;
    // const economyClassTicketCount = parseInt(economyClassTicketInput);

    const firstClassTicketCount = getInputValue('first-class-input');
    const economyClassTicketCount = getInputValue('economy-class-input');

    let total = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    let vat = total * .1;
    let grandTotal = total + vat;


    const subTotalValue = document.getElementById('sub-total').innerText = total;
    const subTotalAmount = parseFloat(subTotalValue);
    const vatTotalValue = document.getElementById('vat-total').innerText = vat;
    const vatTotalAmount = parseFloat(vatTotalValue);
    const totalValue = document.getElementById('total').innerText = grandTotal;
    const totalAmount = parseFloat(totalValue);
    
    // const vatTotalAmount = getInputValue('vat-total');
    // const subTotalAmount = getInputValue('sub-total');
    // const totalAmount = getInputValue('total');

    
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueCount = parseInt(inputValue);
    return inputValueCount;
}
