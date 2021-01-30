
//count increase or decrease ticket value
function ticketCount(id, isIncrease) {
    const ticketCount = parseInputValue(id + '-input');
    let ticketNewCount = ticketCount;
    console.log(ticketNewCount);
    console.log(id);

    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }

    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    document.getElementById(id + '-input').value = ticketNewCount;
    calculateTotal();
}


document.getElementById('book-now').addEventListener('click', function () {
    const bookNow = document.getElementById('ticket');
    bookNow.style.display = 'none';
    const bookInfo = document.getElementById('ticket-booking-information');
    bookInfo.style.display = 'block';

 
    const flyingFromInput = getInputValue('flying-from');
    const flyingToInput = getInputValue('flying-to');
    const departureInput = getInputValue('departure');
    const returnInput = getInputValue('return');
    const firstClassInputCount = parseInputValue('first-class-input');
    const economyClassInputCount = parseInputValue('economy-class-input');

    // let firstClassTicketPrice = firstClassInputCount * 150;
    // let economyClassTicketPrice = economyClassInputCount * 100;
    // let total = firstClassTicketPrice + economyClassTicketPrice;
    // let vat = total * .1;
    // let grandTotal = total + vat;

    setPurchaseTicketValue('flying-from-value',flyingFromInput);
    setPurchaseTicketValue('flying-to-value',flyingToInput);
    setPurchaseTicketValue('departure-value',departureInput);
    setPurchaseTicketValue('return-value',returnInput);
    // setPurchaseTicketValue('first-class-ticket',firstClassInputCount);
    // setPurchaseTicketValue('first-class-ticket-price',firstClassTicketPrice);
    // setPurchaseTicketValue('economy-class-ticket',economyClassInputCount);
    // setPurchaseTicketValue('economy-class-ticket-price',economyClassTicketPrice);
    // setPurchaseTicketValue('sub-total-amount',total);
    // setPurchaseTicketValue('vat-amount',vat);
    // setPurchaseTicketValue('total-amount',grandTotal);
    calculateTotal();
   
})

//calculation for ticket and ticket price 
function calculateTotal() {
    const firstClassTicketCount = parseInputValue('first-class-input');
    const economyClassTicketCount = parseInputValue('economy-class-input');

    let firstClassTicketPrice = firstClassTicketCount * 150;
    let economyClassTicketPrice = economyClassTicketCount * 100;
    let total = firstClassTicketPrice + economyClassTicketPrice;
    let vat = total * .1;
    let grandTotal = total + vat;

    const subTotalValue = document.getElementById('sub-total').innerText = total;
    const vatTotalValue = document.getElementById('vat-total').innerText = vat;
    const totalValue = document.getElementById('total').innerText = grandTotal;

    setPurchaseTicketValue('first-class-ticket',firstClassTicketCount);
    setPurchaseTicketValue('first-class-ticket-price','$'+firstClassTicketPrice);
    setPurchaseTicketValue('economy-class-ticket',economyClassTicketCount);
    setPurchaseTicketValue('economy-class-ticket-price','$'+economyClassTicketPrice);
    setPurchaseTicketValue('sub-total-amount','$'+total);
    setPurchaseTicketValue('vat-amount','$'+vat);
    setPurchaseTicketValue('total-amount','$'+grandTotal);
}

//input ticket convert string to integer
function parseInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueCount = parseInt(inputValue);
    return inputValueCount;
}

//get input value and return
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

//set purchase ticket information
function setPurchaseTicketValue(id,inputValue) {
    document.getElementById(id).innerHTML = inputValue;
}
