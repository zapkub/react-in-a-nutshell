const app = require("express")();

const Joi = require("joi");
const rateLimit = require("express-rate-limit");

const configuration = require("./src/configuration");
app.use(require("body-parser").json());
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 15 minutes
  max: 10,
  message: "Allow only 10 order per 1 minute"
});
app.use(require("cors")());

const orderSchema = Joi.object()
  .keys({
    name: Joi.string()
      .max(10)
      .min(1)
      .required(),
    menu: Joi.required().valid(configuration.menuOptions),
    bread: Joi.valid(configuration.breadOptions).default(
      configuration.breadOptions[0]
    ),
    veggies: Joi.array()
      .items(Joi.valid(configuration.veggieOptions))
      .default([]),
    sauces: Joi.array()
      .items(Joi.valid(configuration.saucesOptions))
      .max(2)
      .default([])
  })
  .required();

const orders = [
  {
    name: "Rungsikorn",
    menu: "Black Forest Ham",
    bread: "Italian",
    veggies: ["Green Peppers", "Lettuce"],
    sauces: ["Light or Regular Mayonnaise", "Ranch"],
    orderNo: 1
  }
];

app.get("/order/_list", (req, res) => {
  res.send({
    data: orders
  });
});
app.use(apiLimiter);
app.post("/order", (req, res) => {
  const result = Joi.validate(req.body, orderSchema);
  if (result.error === null) {
    orders.push({
      ...result.value,
      orderNo: orders.length + 1,
      name: result.value.name + ` (${req.ip})`
    });
    res.json({
      code: 200,
      message: `Your sandwich order is, ${orders.length}`
    });
  } else {
    res.status(400).json({
      code: 400,
      message: result.error.message
    });
  }
});

export const server = app.listen(3001, function() {
  console.log("server start at :3001");
});

export function stopServer() {
  server.close();
}
