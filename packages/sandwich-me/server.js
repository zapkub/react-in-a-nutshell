const app = require("express")();

const Joi = require("joi");

const configuration = require("./src/configuration");
app.use(require("body-parser").json());

const orderSchema = Joi.object()
  .keys({
    menu: Joi.required().valid(configuration.menuOptions),
    bread: Joi.valid(configuration.breadOptions).default(
      configuration.breadOptions[0]
    ),
    veggies: Joi.array()
      .valid(configuration.veggieOptions)
      .default([]),
    sauces: Joi.array()
      .max(2)
      .valid(configuration.saucesOptions)
      .default([])
  })
  .required()

const orders = [];

app.post("/order", (req, res) => {
  console.log(req.body)
  const result = Joi.validate(req.body, orderSchema);
  if (result.error === null) {
    orders.push(req.body);
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

export const server = app.listen(3001);

export function stopServer() {
  server.close();
}
