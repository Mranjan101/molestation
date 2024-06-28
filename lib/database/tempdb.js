const mongoose = require("mongoose");
const TempDb = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: "MASTER-MIND-V3"
  },
  creator: {
    type: String,
    default: "MASTER-MIND"
  },
  data: {
    type: Object,
    default: {}
  }
});
const dbtemp = mongoose.model("dbtemp", TempDb);
module.exports = {
  dbtemp
};
