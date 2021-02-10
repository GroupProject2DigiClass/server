const mongoose = require("mongoose");
const {
  InstituteTypeInfo,
  YearTypeOptions,
  SectionTypeOption,
  AdminDesignationOptions,
  AdminRankOptions,
} = require("./../../constants");

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
  },
  institute_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  institute_type: {
    type: String,
    required: true,
    enum: InstituteTypeInfo,
  },
  choice_year: {
    type: String,
    required: true,
    enum: YearTypeOptions,
  },
  year_quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  image: {
    type: String,
    trim: true,
  },
  choice_branch: {
    type: String,
    required: true,
    enum: SectionTypeOption,
  },
  branch_Quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  description: {
    type: String,
    required: true,
    enum: SectionTypeOption,
  },
  designation: {
    type: String,
    required: true,
    enum: AdminDesignationOptions,
  },
  profile_link: {
    type: String,
    trim: true,
  },
  rank: {
    type: String,
    required: true,
    enum: AdminRankOptions,
  },
});

var Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
