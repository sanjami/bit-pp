
var bank_balance = 303.91;

function totalPrice (bank_balance) {
    var spending_thresghold = 200;
    var tax_rate = 0.08;
    var phone_price = 99.99;
    var accessory_price = 9.99;
    var amount = 0;

    while (amount < bank_balance) {
        amount = amount + (phone_price + phone_price*tax_rate);
        if (amount < spending_thresghold) {
            amount = amount + (accessory_price + accessory_price*tax_rate);
        }
    } 
    if (amount > bank_balance) {
        return "Amount is: " + amount + " You don't have enough monay on your bank acount.";
    } else {
    return amount;
    }
}

var bank_balance = prompt("Check your bank acount");
console.log(totalPrice(bank_balance));