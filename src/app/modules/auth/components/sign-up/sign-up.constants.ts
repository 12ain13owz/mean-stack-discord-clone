export const SIGNUP_CONSTANTS = {
  patternPassword:
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',

  validationMessage: {
    email: {
      required: 'Email is required.',
      email: 'Please provide a valid email.',
    },

    password: {
      required: 'Password is required',
      pattern:
        'Password must contain a capital, lowercase, digit ,special character and least 8 characters long.',
    },

    confirmPassword: {
      required: 'Confirm Password is required.',
      compare: 'Password do not match.',
    },
  },
};
