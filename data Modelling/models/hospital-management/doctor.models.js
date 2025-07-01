import mongoose from 'mongoose';

const hospitalHoursSchema = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  hours: {
    type: String,
    default: 0,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    workInHospitals: [hospitalHoursSchema],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
