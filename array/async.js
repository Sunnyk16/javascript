async function add() {
  for (let i = 0; i < 100000; i++) {}
  throw new Error("something went wrong...");
  return "function finished";
}

(async function () {
  try {
    const p = await add();
    console.log(p);
  } catch (err) {
    console.log(err.message);
  }
})();
