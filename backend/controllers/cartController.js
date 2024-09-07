import userModel from "../models/userModel.js";

// add items user card
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cardData = await userData.cardData;
    if (!cardData[req.body.itemId]) {
      cardData[req.body.itemId] = 1;
    } else {
      cardData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cardData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove item from cart
const removeFormCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cardData = await userData.cardData;
    if (cardData[req.body.itemId] > 0) {
      cardData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cardData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cardData = await userData.cardData;
    res.json({ success: true, cardData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFormCart, getCart };
