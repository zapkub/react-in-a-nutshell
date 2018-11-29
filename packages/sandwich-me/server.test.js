const fetch = require("node-fetch");
const s = require("./server");
test("should able to post order", async () => {
  const response = await fetch("http://localhost:3001/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      menu: "Black Forest Ham"
    })
  });

  const result = await response.json();

  console.log(result);
});

afterAll(() => {
  s.stopServer();
});
