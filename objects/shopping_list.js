'use strict';

(function () {
    console.log("Hi");

    function Product(name, price, expirationDate) {
        this.name = name;
        this.id = (function () {
            var productId;
            var firstLetter = name.charAt(0).toUpperCase();
            var lastLetter = name.charAt(name.length - 1).toUpperCase();
            var number = Math.floor((99999 - 10000) * Math.random() + 10000);
            productId = firstLetter + lastLetter + number;
            return productId;
        })();
        this.price = price;
        this.expirationDate = expirationDate;
    }

    Product.prototype.getInfo = function () {
        return this.id + ',' + this.name + ',' + this.price;
    }

    var milk = new Product('milk', 105.99, new Date(2018, 5, 13));
    var chocolate = new Product('chocolate', 120.524, new Date(2019, 6, 13));
    var vine = new Product('vine', 1500, new Date(2019, 6, 13));
    var egg = new Product("egg", 15, new Date(2019, 4, 13))
    // console.log(milk.getInfo());
    // console.log(milk.getInfo());

    function ShoppingBag() {
        this.listOfProducts = [];
    };

    ShoppingBag.prototype.averagePrice = function () {
        var totalPrice = 0;
        var avPrice = 0;

        this.listOfProducts.forEach(function (element) {
            totalPrice += element.price;
        })
        return "Average price is " + totalPrice / this.listOfProducts.length.toFixed(3);
    };

    ShoppingBag.prototype.getMostExpensive = function () {
        var max = 0;
        var mostExpensiveProduct;

        this.listOfProducts.forEach(function (element) {
            if (element.price > max) {
                max = element.price;
                mostExpensiveProduct = element;
            }
        })
        return "Most expensive product is " + mostExpensiveProduct.name;
    }

    ShoppingBag.prototype.addProduct = function (product) {
        if (product.expirationDate > new Date()) {
            this.listOfProducts.push(product);
        }
    }

    ShoppingBag.prototype.totalPrice = function () {
        var allPrice = 0;

        this.listOfProducts.forEach(function (element) {
            allPrice += element.price;
        })
        return allPrice;
    }


    var shoppingBag = new ShoppingBag();
    shoppingBag.addProduct(milk);
    shoppingBag.addProduct(chocolate);
    shoppingBag.addProduct(vine);

    // console.log(shoppingBag.averagePrice());
    // console.log(shoppingBag.getMostExpensive());
    // console.log(shoppingBag.addProduct(egg));
    //console.log(shoppingBag.totalPrice());

    function PaymentCard(balance, status, expDate) {
        this.balance = balance;
        this.status = status;
        this.validUntilDate = expDate;
    }

    var myCard = new PaymentCard(1000, 'active', new Date(2019, 6, 13));


    function checkoutAndBuy(shoppingBag, myCard) {
        var ourMoney = myCard.balance;
        var needMoney = shoppingBag.totalPrice();
        if (ourMoney > needMoney) {
            return 'Purchase is successful'
        } else {
            return 'You need ' + (needMoney - ourMoney);
        }
    }

    console.log(checkoutAndBuy(shoppingBag, myCard));

}
)();



