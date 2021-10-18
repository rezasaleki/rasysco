module.exports = mongoose => {
    const Good = mongoose.model(
      "goods",
      mongoose.Schema({
      },
        { timestamps: true }
      )
    );
    return Good;
};