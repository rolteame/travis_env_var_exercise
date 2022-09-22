const FAVOURITE_FOOD = process.env.NAME

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My Favourite food is ${FAVOURITE_FOOD}`);
    await sleep(5000);
  }
}

main();
