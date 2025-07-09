import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, date, time, phone } = req.body;

    // ✅ Basic validation
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return next(new ErrorHandler("Please fill out the full reservation form.", 400));
    }

    // ✅ Create reservation
    await Reservation.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      date,
      time,
      phone: phone.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Reservation sent successfully!",
    });

  } catch (error) {
    // ✅ Handle Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(messages.join(", "), 400));
    }

    // ❌ All other errors
    return next(error);
  }
};

export default send_reservation;
