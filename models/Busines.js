module.exports = mongoose => {
  const businesSchema = new mongoose.Schema({
    name: String,
    ownerName: String,
    businessAddress: {
      country: String,
      state: String,
      city: String,
      description: String
    }
  }, { timestamps: true });
  const Busines = mongoose.model('Businesses', businesSchema);

  return Busines;
};