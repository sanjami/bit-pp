var breakfast = {
    name: 'pie',
    ingredients: ['cheese', 'crust', 'eggs'],
    energy: 600,
    printInstructions: function() {
        return 'Mix' + ' ' + breakfast.ingredients[0] + ', ' + breakfast.ingredients[1] + ', ' + breakfast.ingredients[2];
    },
    JSCompliant: function() {
        if(breakfast.energy > 500) {
            return true;
        } else {
            return false;
        }
    },
    changeName: function() {
        breakfast.name = 'pizza';
        return breakfast.name;
    }
};

console.log(breakfast.printInstructions ());
console.log(breakfast.JSCompliant ());
console.log(breakfast.changeName ());
// console.log(breakfast.name);
