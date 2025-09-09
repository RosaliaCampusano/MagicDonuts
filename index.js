import { data } from "./donut.js";

const donuts = data.items.item;

console.log("--------- EJERCICIO 1 -------");
donutsWithHigherSugar();
console.log("-------------------------");
donutsWithHigherIron();
console.log("-------------------------");
donutsWithHigherProtein();
console.log("-------------------------");
donutsWithLessFibre();
console.log("-------------------------");
donutsWithHigherCalorie();
console.log("-------------------------");

console.log("--------- EJERCICIO 2 -------");
listdonutssWithCalories();
console.log("-------------------------");
listdonutsWithCarbohydrate();
console.log("-------------------------");
averageOfCalories();
console.log("-------------------------");
sumOfAllSaturatedFat();
console.log("-------------------------");
averagePercentOfEachVitamin();
console.log("-------------------------");

console.log("--------- EJERCICIO 3 -------");
donutsListWithTheyBatter();
console.log("-------------------------");
donutsListWithTheyTopping();
console.log("-------------------------");
donutsWithMoreVarietyBatter();
console.log("-------------------------");
donutsWithMoreVarietyTopping();
console.log("-------------------------");
totalOfDifferentsBattersAndTopping();
console.log("-------------------------");

console.log("--------- EJERCICIO 4 -------");
donutssCanBuyWithCoins();
console.log("-------------------------");
findTheHigherdonuts();
console.log("-------------------------");
findtheLowerdonuts();
console.log("-------------------------");
sortdonutssByPrice();
console.log("-------------------------");

console.log("-------- Ejercicio 5 ------");
modifieFatdonutss();
console.log("---------------------");
modifieAmountOfCarbohydrate();
console.log("---------------------");
addVitaminIntoAMagicFusion();
console.log("---------------------");
setADailyValue();
console.log("---------------------");
setAlergenAttributeInRelaxingAlchemydonuts();
console.log("---------------------");

function donutsWithHigherSugar() {
  let higherSugar = donuts[0];
  for (let i = 0; i < donuts.length; i++) {
    const sugar =
      +donuts[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];
    if (
      sugar >
      +higherSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0]
    ) {
      higherSugar = donuts[i];
    }
  }

  console.log(`El donuts con mas azucar es ${higherSugar.name}`);
}

function donutsWithHigherIron() {
  let higherIron = donuts[0];
  for (let i = 0; i < donuts.length; i++) {
    const iron =
      +donuts[i].nutrition_facts.nutrition.vitamins[3].percent.split("%")[0];
    if (
      iron >
      higherIron.nutrition_facts.nutrition.vitamins[3].percent.split("%")[0]
    ) {
      higherIron = donuts[i];
    }
  }
  console.log(`El donuts con mas hierro es ${higherIron.name}`);
}

function donutsWithHigherProtein() {
  let higherProtein = donuts[0];

  for (let i = 0; i < donuts.length; i++) {
    const protein = +donuts[i].nutrition_facts.nutrition.protein.split("g")[0];
    if (
      protein > +higherProtein.nutrition_facts.nutrition.protein.split("g")[0]
    ) {
      higherProtein = donuts[i];
    }
  }

  console.log(`El donuts con mas proteina es ${higherProtein.name}`);
}

function donutsWithLessFibre() {
  let currentFibre = donuts[0];
  let fibredonutss = [];

  for (let i = 0; i < donuts.length; i++) {
    const fibre =
      +donuts[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      )[0];
    if (
      fibre <=
      +currentFibre.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      )[0]
    ) {
      currentFibre = donuts[i];
      fibredonutss.push(donuts[i]);
    }
  }

  console.log("Los donutss con menos fibras son: ");
  for (let i = 0; i < fibredonutss.length; i++) {
    console.log(`${fibredonutss[i].name}`);
  }
}

function donutsWithHigherCalorie() {
  let higherCalorie = donuts[0];

  for (let i = 0; i < donuts.length; i++) {
    if (
      donuts[i].nutrition_facts.nutrition.calories >
      higherCalorie.nutrition_facts.nutrition.calories
    ) {
      higherCalorie = donuts[i];
    }
  }

  console.log(`El donuts con mas calorias es ${higherCalorie.name}`);
}

function listdonutssWithCalories() {
  for (let i = 0; i < donuts.length; i++) {
    console.log(
      `${i + 1} . Name: ${donuts[i].name}, Calories: ${
        donuts[i].nutrition_facts.nutrition.calories
      }`
    );
  }
  console.log();
}

function listdonutsWithCarbohydrate() {
  for (let i = 0; i < donuts.length; i++) {
    console.log(
      `${i + 1}. Name: ${donuts[i].name}, Carbohydrate: ${
        donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
      } de fibra y ${
        donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type
          .sugars
      } de azucar`
    );
  }
  console.log();
}

function averageOfCalories() {
  let sumOfCalories = 0;

  for (let i = 0; i < donuts.length; i++) {
    sumOfCalories += donuts[i].nutrition_facts.nutrition.calories;
  }

  let averageCalories = sumOfCalories / donuts.length;

  console.log(
    `La media de las calorias de los donuts es de ${averageCalories}`
  );
}

function sumOfAllSaturatedFat() {
  let totalSumOfSaturedFat = 0;

  for (let i = 0; i < donuts.length; i++) {
    const saturedFat =
      +donuts[i].nutrition_facts.nutrition.fat.fat_type.saturated.split("g")[0];

    totalSumOfSaturedFat += saturedFat;
  }

  console.log(
    `La suma total de grasas saturadas es de ${totalSumOfSaturedFat}`
  );
}

function averagePercentOfEachVitamin() {
  let vitaminSum = {
    vitaminA: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0,
  };

  for (let i = 0; i < donuts.length; i++) {
    const vitamins = donuts[i].nutrition_facts.nutrition.vitamins;

    for (let j = 0; j < vitamins.length; j++) {
      if (vitamins[j].type.includes("Vitamin A")) {
        const vitaminA = +vitamins[j].percent.split("%")[0];
        vitaminSum.vitaminA += vitaminA;
      } else if (vitamins[j].type.includes("Vitamin C")) {
        const vitaminC = +vitamins[j].percent.split("%")[0];
        vitaminSum.vitaminC += vitaminC;
      } else if (vitamins[j].type.includes("Calcium")) {
        const calcium = +vitamins[j].percent.split("%")[0];
        vitaminSum.calcium += calcium;
      } else {
        const iron = +vitamins[j].percent.split("%")[0];
        vitaminSum.iron += iron;
      }
    }
  }
  let vitaminAverage = {
    VitaminA: vitaminSum.vitaminA / donuts.length,
    VitaminC: vitaminSum.vitaminC / donuts.length,
    Calcium: vitaminSum.calcium / donuts.length,
    Iron: vitaminSum.iron / donuts.length,
  };

  console.log(`La media de cada vitamina es de:
    Vitamina A: ${vitaminAverage.VitaminA}%
    Vitamina C: ${vitaminAverage.VitaminC}%
    Calcium: ${vitaminAverage.Calcium}%
    Iron: ${vitaminAverage.Iron}%`);
}

function donutsListWithTheyBatter() {
  console.log("\n----LIST OF BATTERS----");
  for (let i = 0; i < donuts.length; i++) {
    const batter = donuts[i].batters.batter;
    console.log(`\n${i + 1}. ${donuts[i].name}:`);
    for (let j = 0; j < batter.length; j++) {
      console.log(`${batter[j].type}`);
    }
  }
}

function donutsListWithTheyTopping() {
  console.log("\n----LIST OF TOPPINGS----");
  for (let i = 0; i < donuts.length; i++) {
    const topping = donuts[i].topping;
    console.log(`\n${i + 1}. ${donuts[i].name}:`);
    for (let j = 0; j < topping.length; j++) {
      if (!topping[j].type.includes("None")) {
        console.log(`${topping[j].type}`);
      }
    }
  }
}

function donutsWithMoreVarietyBatter() {
  let donutsWithMoreBatter = donuts[0].batters.batter;
  let donutsName;

  for (let i = 0; i < donuts.length; i++) {
    const batter = donuts[i].batters.batter;

    if (batter.length > donutsWithMoreBatter.length) {
      donutsWithMoreBatter = batter;
      donutsName = donuts[i].name;
    }
  }

  console.log(`\nEl donuts con mas variedad de masas es de ${donutsName}`);
}

function donutsWithMoreVarietyTopping() {
  let donutsWithMoreTopping = donuts[0].topping;
  let donutsTopping = [];

  for (let i = 1; i < donuts.length; i++) {
    const topping = donuts[i].topping;

    if (topping.length >= donutsWithMoreTopping.length) {
      donutsWithMoreTopping = topping;
      donutsTopping.push(donuts[i]);
    }
  }

  console.log("\nLos donuts con mas variedad de topping son: ");

  for (let i = 0; i < donutsTopping.length; i++) {
    console.log(`${donutsTopping[i].name}`);
  }
}

function totalOfDifferentsBattersAndTopping() {
  let batterSeen = [];
  let toppingSeen = [];

  for (let i = 0; i < donuts.length; i++) {
    const batter = donuts[i].batters.batter;
    const topping = donuts[i].topping;

    for (let j = 0; j < batter.length; j++) {
      if (!batterSeen.includes(batter[j].id)) {
        batterSeen.push(batter[j].id);
      }
    }

    for (let k = 0; k < topping.length; k++) {
      if (!toppingSeen.includes(topping[k].id)) {
        toppingSeen.push(topping[k].id);
      }
    }
  }

  console.log(
    `El total de masas diferentes que existen en toda la posada es de ${batterSeen.length}`
  );
  console.log(
    `El total de toppings diferentes que existen en toda la posada es de ${
      toppingSeen.length - 1
    }`
  );
}

function donutssCanBuyWithCoins() {
  let silverCoins = 4;
  let donutsPerType = [];

  for (let i = 0; i < donuts.length; i++) {
    let quantity = Math.floor(silverCoins / donuts[i].ppu);
    let leftoverCoins = (silverCoins - quantity * donuts[i].ppu).toFixed(2);
    donutsPerType.push(
      `${donuts[i].name}, cantidad: ${quantity}, monedas restantes: ${leftoverCoins}`
    );
  }

  for (let i = 0; i < donutsPerType.length; i++) {
    console.log(donutsPerType[i]);
  }
}

function findTheHigherdonuts() {
  let higherCoin = donuts[0];
  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].ppu > higherCoin.ppu) {
      higherCoin = donuts[i];
    }
  }

  console.log(
    `El donuts mas caro es ${higherCoin.name} y cuesta ${higherCoin.ppu}`
  );
}

function findtheLowerdonuts() {
  let lowerdonuts = donuts[0];
  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].ppu < lowerdonuts.ppu) {
      lowerdonuts = donuts[i];
    }
  }

  console.log(
    `El donuts mas barato es ${lowerdonuts.name} y cuesta ${lowerdonuts.ppu}`
  );
}

function sortdonutssByPrice() {
  for (let i = 0; i < donuts.length - 1; i++) {
    for (let j = i + 1; j < donuts.length; j++) {
      if (donuts[i].ppu > donuts[j].ppu) {
        [donuts[i], donuts[j]] = [donuts[j], donuts[i]];
      }
    }
  }

  for (let i = 0; i < donuts.length; i++) {
    console.log(`${donuts[i].name}, price: ${donuts[i].ppu}`);
  }
}

function modifieFatdonutss() {
  for (let i = 0; i < donuts.length; i++) {
    const cholesterol =
      +donuts[i].nutrition_facts.nutrition.cholesterol.amount.split("mg")[0];
    if (cholesterol > 12) {
      donuts[i].nutrition_facts.nutrition.fat.fat_type.trans = "3,2gr";
      console.log(
        `${donuts[i].name} ${donuts[i].nutrition_facts.nutrition.fat.fat_type.trans}`
      );
    }
  }
}

function modifieAmountOfCarbohydrate() {
  for (let i = 0; i < donuts.length; i++) {
    const sugar =
      +donuts[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];

    if (sugar > 50) {
      donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount =
        "42gr";
      console.log(
        `${donuts[i].name} ${donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount}`
      );
    }
  }
}

function addVitaminIntoAMagicFusion() {
  for (let i = 0; i < donuts.length; i++) {
    const vitamins = donuts[i].nutrition_facts.nutrition.vitamins;
    if (donuts[i].name === "Magic Fusion") {
      vitamins.push({
        type: "Nitacina",
        percent: "0%",
      });

      console.log(`Las vitaminas de ${donuts[i].name} son: `);
      for (let j = 0; j < vitamins.length; j++) {
        console.log(`${vitamins[j].type} ${vitamins[j].percent}`);
      }
    }
  }
}

function setADailyValue() {
  for (let i = 0; i < donuts.length; i++) {
    donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
    console.log(
      `${donuts[i].name} tiene un valor diario de ${donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value}`
    );
  }
}

function setAlergenAttributeInRelaxingAlchemydonuts() {
  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].name === "Relaxing Alchemy") {
      const alergen = { type: "Gluten free" };
      donuts[i] = { ...donuts[i], alergen };
      console.log(`${donuts[i].name} alergen is ${donuts[i].alergen.type}`);
    }
  }
}
