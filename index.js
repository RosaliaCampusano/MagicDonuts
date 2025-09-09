import { data } from "./donut.js";

const donut = data.items.item;

console.log("--------- EJERCICIO 1 -------");
donutWithHigherSugar();
console.log("-------------------------");
donutWithHigherIron();
console.log("-------------------------");
donutWithHigherProtein();
console.log("-------------------------");
donutWithLessFibre();
console.log("-------------------------");
donutWithHigherCalorie();
console.log("-------------------------");

console.log("--------- EJERCICIO 2 -------");
listDonutsWithCalories();
console.log("-------------------------");
listDonutWithCarbohydrate();
console.log("-------------------------");
averageOfCalories();
console.log("-------------------------");
sumOfAllSaturatedFat();
console.log("-------------------------");
averagePercentOfEachVitamin();
console.log("-------------------------");

console.log("--------- EJERCICIO 3 -------");
donutListWithTheyBatter();
console.log("-------------------------");
donutListWithTheyTopping();
console.log("-------------------------");
donutWithMoreVarietyBatter();
console.log("-------------------------");
donutWithMoreVarietyTopping();
console.log("-------------------------");
totalOfDifferentsBattersAndTopping();

/* console.log("--------- EJERCICIO 4 -------");
donutsCanBuyWithCoins(); */

console.log("-------- Ejercicio 5 ------");
modifieFatDonuts();
console.log("---------------------");
modifieAmountOfCarbohydrate();
console.log("---------------------");
addVitaminIntoAMagicFusion();
console.log("---------------------");
setADailyValue();
console.log("---------------------");
setAlergenAttributeInRelaxingAlchemyDonut();

function donutWithHigherSugar() {
  let higherSugar = donut[0];
  for (let i = 0; i < donut.length; i++) {
    const sugar =
      +donut[
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
      higherSugar = donut[i];
    }
  }

  console.log(`El donut con mas azucar es ${higherSugar.name}`);
}

function donutWithHigherIron() {
  let higherIron = donut[0];
  for (let i = 0; i < donut.length; i++) {
    const iron =
      +donut[i].nutrition_facts.nutrition.vitamins[3].percent.split("%")[0];
    if (
      iron >
      higherIron.nutrition_facts.nutrition.vitamins[3].percent.split("%")[0]
    ) {
      higherIron = donut[i];
    }
  }
  console.log(`El donut con mas hierro es ${higherIron.name}`);
}

function donutWithHigherProtein() {
  let higherProtein = donut[0];

  for (let i = 0; i < donut.length; i++) {
    const protein = +donut[i].nutrition_facts.nutrition.protein.split("g")[0];
    if (
      protein > +higherProtein.nutrition_facts.nutrition.protein.split("g")[0]
    ) {
      higherProtein = donut[i];
    }
  }

  console.log(`El donut con mas proteina es ${higherProtein.name}`);
}

function donutWithLessFibre() {
  let currentFibre = donut[0];
  let fibreDonuts = [];

  for (let i = 0; i < donut.length; i++) {
    const fibre =
      +donut[
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
      currentFibre = donut[i];
      fibreDonuts.push(donut[i]);
    }
  }

  console.log("LOs donuts con menos fibras son: ");
  for (let i = 0; i < fibreDonuts.length; i++) {
    console.log(`${fibreDonuts[i].name}`);
  }
}

function donutWithHigherCalorie() {
  let higherCalorie = donut[0];

  for (let i = 0; i < donut.length; i++) {
    if (
      donut[i].nutrition_facts.nutrition.calories >
      higherCalorie.nutrition_facts.nutrition.calories
    ) {
      higherCalorie = donut[i];
    }
  }

  console.log(`El donut con mas calorias es ${higherCalorie.name}`);
}

function listDonutsWithCalories() {
  for (let i = 0; i < donut.length; i++) {
    console.log(
      `${i + 1} . Name: ${donut[i].name}, Calories: ${
        donut[i].nutrition_facts.nutrition.calories
      }`
    );
  }
  console.log();
}

function listDonutWithCarbohydrate() {
  for (let i = 0; i < donut.length; i++) {
    console.log(
      `${i + 1}. Name: ${donut[i].name}, Carbohydrate: ${
        donut[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
      } de fibra y ${
        donut[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars
      } de azucar`
    );
  }
  console.log();
}

function averageOfCalories() {
  let sumOfCalories = 0;

  for (let i = 0; i < donut.length; i++) {
    sumOfCalories += donut[i].nutrition_facts.nutrition.calories;
  }

  let averageCalories = sumOfCalories / donut.length;

  console.log(`La media de las calorias de los donut es de ${averageCalories}`);
}

function sumOfAllSaturatedFat() {
  let totalSumOfSaturedFat = 0;

  for (let i = 0; i < donut.length; i++) {
    const saturedFat =
      +donut[i].nutrition_facts.nutrition.fat.fat_type.saturated.split("g")[0];

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

  for (let i = 0; i < donut.length; i++) {
    const vitamins = donut[i].nutrition_facts.nutrition.vitamins;

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
    VitaminA: vitaminSum.vitaminA / donut.length,
    VitaminC: vitaminSum.vitaminC / donut.length,
    Calcium: vitaminSum.calcium / donut.length,
    Iron: vitaminSum.iron / donut.length,
  };

  console.log(`La media de cada vitamina es de:
    Vitamina A: ${vitaminAverage.VitaminA}%
    Vitamina C: ${vitaminAverage.VitaminC}%
    Calcium: ${vitaminAverage.Calcium}%
    Iron: ${vitaminAverage.Iron}%`);
}

function donutListWithTheyBatter() {
  console.log("\n----LIST OF BATTERS----");
  for (let i = 0; i < donut.length; i++) {
    const batter = donut[i].batters.batter;
    console.log(`\n${i + 1}. ${donut[i].name}:`);
    for (let j = 0; j < batter.length; j++) {
      console.log(`${batter[j].type}`);
    }
  }
}

function donutListWithTheyTopping() {
  console.log("\n----LIST OF TOPPINGS----");
  for (let i = 0; i < donut.length; i++) {
    const topping = donut[i].topping;
    console.log(`\n${i + 1}. ${donut[i].name}:`);
    for (let j = 0; j < topping.length; j++) {
      if (!topping[j].type.includes("None")) {
        console.log(`${topping[j].type}`);
      }
    }
  }
}

function donutWithMoreVarietyBatter() {
  let donutWithMoreBatter = donut[0].batters.batter;
  let donutName;

  for (let i = 0; i < donut.length; i++) {
    const batter = donut[i].batters.batter;

    if (batter.length > donutWithMoreBatter.length) {
      donutWithMoreBatter = batter;
      donutName = donut[i].name;
    }
  }

  console.log(`\nEl donut con mas variedad de masas es de ${donutName}`);
}

function donutWithMoreVarietyTopping() {
  let donutWithMoreTopping = donut[0].topping;
  let donutTopping = [];

  for (let i = 1; i < donut.length; i++) {
    const topping = donut[i].topping;

    if (topping.length >= donutWithMoreTopping.length) {
      donutWithMoreTopping = topping;
      donutTopping.push(donut[i]);
    }
  }

  console.log("\nLos donut con mas variedad de topping son: ");

  for (let i = 0; i < donutTopping.length; i++) {
    console.log(`${donutTopping[i].name}`);
  }
}

function totalOfDifferentsBattersAndTopping() {
  let totalBatter = 0;
  let totalTopping = 0;
  let batterSeen = [];
  let toppingSeen = [];

  for (let i = 0; i < donut.length; i++) {
    const batter = donut[i].batters.batter;
    const topping = donut[i].topping;

    for (let j = 0; j < batter.length; j++) {
      if (!batterSeen.includes(batter[j].id)) {
        batterSeen.push(batter[j].id);
        totalBatter++;
      }
    }

    for (let k = 0; k < topping.length; k++) {
      if (!toppingSeen.includes(topping[k].id)) {
        toppingSeen.push(topping[k].id);
        totalTopping++;
      }
    }
  }

  console.log(
    `El total de masas diferentes que existen en toda la posada es de ${totalBatter}`
  );
  console.log(
    `El total de masas diferentes que existen en toda la posada es de ${
      totalTopping - 1
    }`
  );
}

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.

//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

//Encontrar el donut más barato de la posada (+ 50 exp)

//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

function modifieFatDonuts() {
  for (let i = 0; i < donut.length; i++) {
    const cholesterol =
      +donut[i].nutrition_facts.nutrition.cholesterol.amount.split("mg")[0];
    if (cholesterol > 12) {
      donut[i].nutrition_facts.nutrition.fat.fat_type.trans = "3,2gr";
      console.log(
        `${donut[i].name} ${donut[i].nutrition_facts.nutrition.fat.fat_type.trans}`
      );
    }
  }
}

function modifieAmountOfCarbohydrate() {
  for (let i = 0; i < donut.length; i++) {
    const sugar =
      +donut[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];

    if (sugar > 50) {
      donut[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount =
        "42gr";
      console.log(
        `${donut[i].name} ${donut[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount}`
      );
    }
  }
}

function addVitaminIntoAMagicFusion() {
  for (let i = 0; i < donut.length; i++) {
    const vitamins = donut[i].nutrition_facts.nutrition.vitamins;
    if (donut[i].name === "Magic Fusion") {
      vitamins.push({
        type: "Nitacina",
        percent: "0%",
      });

      console.log(`Las vitaminas de ${donut[i].name} son: `);
      for (let j = 0; j < vitamins.length; j++) {
        console.log(`${vitamins[j].type} ${vitamins[j].percent}`);
      }
    }
  }
}

function setADailyValue() {
  for (let i = 0; i < donut.length; i++) {
    donut[i].nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
    console.log(
      `${donut[i].name} tiene un valor diario de ${donut[i].nutrition_facts.nutrition.carbohydrate.daily_value}`
    );
  }
}

function setAlergenAttributeInRelaxingAlchemyDonut() {
  for (let i = 0; i < donut.length; i++) {
    if (donut[i].name === "Relaxing Alchemy") {
      const alergen = { type: "Gluten free" };
      donut[i] = { ...donut[i], alergen };
      console.log(`${donut[i].name} alergen is ${donut[i].alergen.type}`);
    }
  }
}
