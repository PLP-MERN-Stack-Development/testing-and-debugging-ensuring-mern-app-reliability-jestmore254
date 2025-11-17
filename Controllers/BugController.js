import Bug from "../Models/Bug.js";

export const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

export const createBug = async (req, res) => {
  const bug = await Bug.create(req.body);
  res.json(bug);
};
