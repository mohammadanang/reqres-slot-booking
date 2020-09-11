module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      fullName: String,
      email: String,
      startDate: String,
      endDate:String,
      booked: Boolean
    },
    { timestamps: true }
  );

  const SlotBook = mongoose.model("slotBook", schema);
  return SlotBook;
};