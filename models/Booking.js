const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  bedType: {
    type: String,
    required: true,
  },
  smokingAllowed: {
    type: Boolean,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
    required: false,
  },
  bookingRef: {
    type: String,
    default: generateRandom = () => {
      let result = '';
      const characters = '0123456789';
      let counter = 0;
      while (counter < 7) {
        result += characters.charAt(Math.floor(Math.random() * 7));
        counter += 1;
      }
      return result;
    }
}

})

module.exports = mongoose.model('Booking', BookingSchema)
