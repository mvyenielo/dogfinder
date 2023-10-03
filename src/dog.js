// import duke from "./duke.jpg";
// import whiskey from "./whiskey.jpg";
// import perry from "./perry.jpg";

const BASE_URL = "http://localhost:5001/dogs";

/**
 * Fetch dogs from API
 *
 */

async function fetchDogList() {
  const response = await fetch(BASE_URL);
  console.log("you called fetch!");
  const dogList = await response.json();
  console.log("resonse json=", dogList);
  return dogList;
}

/**
 * Sets src for images of each dog
 *
 */

// function getSource(name) {
//   let src;
//   if (name === "duke") src = duke;
//   if (name === "whiskey") src = whiskey;
//   if (name === "perry") src = perry;
//   return src;
// }

export { fetchDogList };