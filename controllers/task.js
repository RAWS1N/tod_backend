import Task from ".././models/task.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const CreateTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description, user: req.user });

    res.status(201).json({
      success: true,
      message: "Task has been created",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task)
      return next(new ErrorHandler("task not found or invalid id", 404));
    task.completed = !task.completed;
    await task.save();
    res.status(200).json({
      success: true,
      message: "task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task)
      return next(new ErrorHandler("task not found or invalid id", 404));
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
