module.exports = mongoose => {
    const Busines = mongoose.model(
      "business",
      mongoose.Schema({
          name: String,
          ownerName: String,
          businessAddress: {
            country: String,
            state: String,
            city: String,
            description: String,
            location: {
                type: mongoose.Schema.Types.ObjectId,
            }
          }
      },
        { timestamps: true }
      )
    );
    return Busines;
};