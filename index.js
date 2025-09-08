import { data } from "./donut.js";

const donut = data.items.item;

console.log("--------- EJERCICIO 1 -------");
donutWithHigherSugar();
donutWithHigherIron();
donutWithHigherProtein();
donutWithLessFibre();
donutWithHigherCalorie();

function donutWithHigherSugar() {
  let higherSugar = donut[0];
  for (let i = 0; i < donut.length; i++) {
    if (
      donut[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      ) >
      higherSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )
    ) {
      higherSugar = donut[i];
    }
  }

  console.log(`El donut con mas azucar es ${higherSugar.name}`);
}

function donutWithHigherIron() {
  let higherIron = donut[0];
  for (let i = 0; i < donut.length; i++) {
    if (
      donut[i].nutrition_facts.nutrition.vitamins[3].percent.split("%") >
      higherIron.nutrition_facts.nutrition.vitamins[3].percent.split("%")[1]
    ) {
      higherIron = donut[i];
    }
  }
  console.log(`El donut con mas hierro es ${higherIron.name}`);
}

function donutWithHigherProtein() {
  let higherProtein = donut[0];

  for (let i = 0; i < donut.length; i++) {
    if (
      donut[i].nutrition_facts.nutrition.protein.split("g") >
      higherProtein.nutrition_facts.nutrition.protein.split("g")
    ) {
      higherProtein = donut[i];
    }
  }

  console.log(`El donut con mas proteina es ${higherProtein.name}`);
}

function donutWithLessFibre() {
  let currentFibre = donut[0];

  for (let i = 0; i < donut.length; i++) {
    if (
      donut[
        i
      ].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      ) <=
      currentFibre.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      )
    ) {
      currentFibre = donut[i];
      console.log(`El donut con menos fibra es ${currentFibre.name}`);
    }
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
