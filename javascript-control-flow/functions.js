function planetHasWater(planet) {
  if (planet === "Earth" || planet === "Mars") {
    console.log("true");
  } else {
    console.log("false");
  }
}

planetHasWater("Earth");
planetHasWater("Venus");
planetHasWater("Mars");
planetHasWater("Jupiter");
