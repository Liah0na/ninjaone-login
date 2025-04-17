import dotenv from 'dotenv';

dotenv.config();

const { LOGIN_URL } = process.env;

if (!LOGIN_URL) {
  throw new Error('LOGIN_URL is not defined. Please set it in your environment variables.');
}

export const env = {
  LOGIN_URL,
};
