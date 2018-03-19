
var coffeeShop = {
  beans: 40,
  money: 150,
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 25 },
    americano: { beanRequirement: 5, price: 12.5 },
    doubleShot: { beanRequirement: 15, price: 37 },
    frenchPress: { beanRequirement: 12, price: 30 },
  },

  buySupplies: function (beansAmount) {
    beanPrice = 2;
    if (this.money - (beansAmount * beanPrice) < 0)
      alert("Not enough money to buy this amount of beans. \n You can buy " + Math.floor(this.money / beanPrice) + " beans");

    else {
      this.money -= beansAmount * beanPrice;
      this.beans += beansAmount;
      alert("Now your Amount Of Beans: " + this.beans + ", Money: " + this.money);
    }

  },

  buyDrink: function (drinkType) {
       if (this.makeDrink(drinkType))
       {
         this.money+= this.drinkRequirements[drinkType].price;
         console.log("Money in coffeShop: "+ this.money);
       }
  },

  makeDrink: function (drinkType) {
    //Individual Exercise (Extension 1)-Don't use any nested if statements!
    // +  (Extension 2) + (Extension 3)

    if (!(drinkType in this.drinkRequirements)) {
      alert("Sorry, we don't make " + drinkType);
      return false;
    }

    if ((this.beans - this.drinkRequirements[drinkType].beanRequirement) < 0) {
      alert("Sorry, we're all out of beans!");
      return false;
    }

    this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    alert("Enjoy your "+ drinkType);
    return true;


    /*
    //Individual Exercise
    
        if (drinkType in coffeeShop.drinkRequirements) {
          console.log(drinkType + " is in the coffe shop")
          var beansDrinkType = coffeeShop.drinkRequirements[drinkType];
          console.log("beans of " + drinkType + " :" + beansDrinkType);
          if (beansDrinkType <= this.beans)
            this.beans -= beansDrinkType;
          else
            alert("Sorry, we're all out of beans!");
        }
        else
          alert("Sorry, we don't make " + drinkType);
    */
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(70); // succeed
coffeeShop.buySupplies(80); // not enough money
coffeeShop.buySupplies(5); // succeed and money is empty

coffeeShop.buyDrink("latte"); // now money is 25

//