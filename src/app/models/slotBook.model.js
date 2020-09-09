module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      userEmail: String,
      slotTime: String,
      booked: Boolean
    },
    { timestamps: true }
  );

  const SlotBook = mongoose.model("slotBook", schema);
  return SlotBook;
};