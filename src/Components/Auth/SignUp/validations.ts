import Joi from "joi";

export const schemaSignup = Joi.object({
  nick: Joi.string().min(3).max(20).required().messages({
    "string.empty": "Nick must not be empty.",
    "string.min": "Nick must be longer than 3 caracters and lower than 20.",
    "string.max": "Nick must be longer than 3 caracters and lower than 20.",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Invalid email.",
      "string.empty": "Email must not be an empty field.",
      "any.required": "Email is required.",
    }),
  password: Joi.string()
    .alphanum()
    .trim()
    .min(8)
    .max(50)
    .pattern(/^[a-zA-Z0-9]{8,50}$/)
    .required()
    .messages({
      "string.alphanum": "Password must not contain special characters.",
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must be no longer than 50 characters.",
      "string.pattern.base": "Password must contain letters and numbers.",
      "string.empty": "Password must not be an empty field.",
      "any.required": "Password is required.",
    }),
  repeatPassword: Joi.string()
    .valid(Joi.ref("password"))
    .messages({
      "any.only": "Password dont't match",
    })
    .required(),
});
