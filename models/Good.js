module.exports = mongoose => {
  const goodSchema = new mongoose.Schema({
    discount: Number,
    tax: Number,
    valueAdded: Number,
    barcode: Number,
    businessId: mongoose.Schema.ObjectId,
    title: String,
    brand: String,
    countUnit: Number,
    priceHistory:[],
    comments: []
  }, { timestamps: true });
  const Good = mongoose.model('Goods', goodSchema);
  return Good;
};