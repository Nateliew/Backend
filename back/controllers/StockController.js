const BaseController = require("./BaseController");

class StocksController extends BaseController {
  constructor(model) {
    super(model);
  }

  async insertOne(req, res) {
    const { name, price, image } = req.body.data;
    try {
      const newStock = await this.model.findOrCreate({
        where: { name: name },
        price: price,
        image: image,
        updated_at: new Date(),
        created_at: new Date(),
      });
      return res.json(newStock);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const id = req.params.productId;
    try {
      const output = await this.model.findByPk(id);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = StocksController;
