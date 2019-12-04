import Joi from 'joi';

export const userSchema = Joi.object().keys({
  firstname: Joi.string().min(3).max(15).required(),
  lastname: Joi.string().required(),
  password: Joi.string().min(8).required(),
  address: Joi.string().required(),
  phone_number: Joi.string().required(),
});

export const BVN = Joi.object().keys({
  bvn: Joi.string().required(),
  dob: Joi.string().required()
});
