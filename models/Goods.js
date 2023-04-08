import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GoodsModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Goods', GoodsModel);
