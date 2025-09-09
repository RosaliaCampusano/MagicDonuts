import { data } from "./donut.js";

const donut = data.items.item;

console.log("--------- EJERCICIO 1 -------");
donutWithHigherSugar();
donutWithHigherIron();
donutWithHigherProtein();
donutWithLessFibre();
donutWithHigherCalorie();

console.log("--------- EJERCICIO 2 -------");
listDonutsWithCalories();
listDonutWithCarbohydrate();
averageOfCalories();
sumOfAllSaturatedFat();
averagePercentOfEachVitamin();

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

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

//Listar cada donut con sus posibles masas, batter (+ 50 exp)

//Listar cada donut con sus posibles extras topping (+ 50 exp)

//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)

//Mostrar el donut con más variedad de toppings (+ 50 exp)

//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.

//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

//Encontrar el donut más barato de la posada (+ 50 exp)

//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)
