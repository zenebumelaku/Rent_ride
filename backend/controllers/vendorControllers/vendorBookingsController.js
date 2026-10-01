import Booking from "../../models/BookingModel.js";
import Vehicle from "../../models/vehicleModel.js";

export const vendorBookings = async (req, res, next) => {
  try {
    const { vendorVehicles } = req.body;
    const [bookingRows, vehicleRows] = await Promise.all([
      Booking.find(),
      Vehicle.find(),
    ]);
    const vehiclesById = new Map(
      vehicleRows.map((vehicle) => [String(vehicle._id), vehicle.toJSON()]),
    );
    const bookings = bookingRows
      .map((booking) => ({
        ...booking.toJSON(),
        vehicleDetails: vehiclesById.get(String(booking.vehicleId)),
      }))
      .filter((booking) => booking.vehicleDetails);

    if (!bookings) {
      next(errorHandler(404, "no bookings found"));
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    next(errorHandler(500, "error in allBookings"));
  }
};
