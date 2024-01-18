export const SIGNIN_CONSTANTS = {
  patternPassword:
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',

  validationMessage: {
    email: {
      required: 'Email is required',
      email: 'Please provide a valid email',
    },

    password: {
      required: 'Password is required',
    },
  },
};
