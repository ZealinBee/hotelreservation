const Booking = require("../models/Booking");

module.exports = {
    getBookingPage: (req,res)=>{
        res.render('booking.ejs')
    },

    createBooking: async (req, res) => {
        try {
          await Booking.create({
            checkIn: req.body.checkInDate,
            checkOut: req.body.checkOutDate,
            bedType: req.body.bedType,
            smokingAllowed: req.body.smokingAllowed,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            referralCode: req.body.referralCode,
           
          });
          console.log("Post has been added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      }
}