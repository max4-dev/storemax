import GoodsModel from '../models/Goods.js';

export const create = async (req, res) => {
  try {
    const doc = new GoodsModel({
      title: req.body.title,
      text: req.body.text,
      price: req.body.price,
      rating: req.body.rating,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    });

    const good = await doc.save();

    res.json(good);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать товар',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const good = await GoodsModel.find();

    res.json(good);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товары',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const goodId = req.params.id;
    const good = await GoodsModel.findById(goodId).exec();
    if (!good) {
      return res.status(404).json({
        message: 'Товар не найден',
      });
    }
    res.json(good);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товар',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const goodId = req.params.id;
    const good = await GoodsModel.findOneAndDelete({
      _id: goodId,
    });
    if (!good) {
      return res.status(404).json({
        message: 'Не удалось удалить товар',
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товар',
    });
  }
};

export const update = async (req, res) => {
  try {
    const goodId = req.params.id;
    GoodsModel.updateOne(
      {
        _id: goodId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        price: req.body.price,
        rating: req.body.rating,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
      },
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'Не удалось изменить товар',
    });
  }
};
