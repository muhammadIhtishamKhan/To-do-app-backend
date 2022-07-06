import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, index: true },
    description: {
      type: String,
      required: [true, "task description is required"],
    },
    dateAdded: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Task = mongoose.model("tasks", TaskSchema);

module.exports = Task;
