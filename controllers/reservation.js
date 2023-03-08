const Booking = require("../models/Booking");


module.exports = {
    getReservation: async (req, res) => {
        try {
          const booking = await Booking.find({bookingRef: req.query.bookingRef});
          res.render("reservation.ejs", { booking: booking[0]});
          console.log("Got the reservation")
          console.log(req.query.bookingRef)
          console.log(booking)
        } catch (err) {
          console.log(err);
        }
      }
}
