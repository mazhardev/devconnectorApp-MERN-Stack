const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validateRegisterInput(Data) {
  let errors = {};
  if (!Validator.isLength(Data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters!";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
