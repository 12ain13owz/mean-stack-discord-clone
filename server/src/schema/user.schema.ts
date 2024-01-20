import { object, string, TypeOf } from 'zod';

export const signupUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Please provide a valid email'),
    password: string({
      required_error: 'Password is required',
    }).regex(
      new RegExp(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
      ),
      'Password must contain a capital, lowercase, digit ,special character and least 8 characters long'
    ),
    confirmPassword: string({
      required_error: 'Confirm Password is required',
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  }),
});
export type SignUpUserInput = TypeOf<typeof signupUserSchema>['body'];

export const profileSchema = object({});
