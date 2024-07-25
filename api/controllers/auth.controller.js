import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required to be filled" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    // traditionally, we would have to do something like this:
    // username: username,
    // but after ES6, if the key(in our model) and the value(input) are the same,
    // then we can get away with the following:
    username,
    email,
    password: hashedPassword,
  });
  // console.log(req.body);
  try {
    await newUser.save();
    res.json("Signup succesful");
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
