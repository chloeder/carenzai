export const confUrl = {
  appUrl:
    process.env.NEXT_PUBLIC_APP_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_APP_URL,
  apiUrl:
    process.env.NEXT_PUBLIC_APP_ENV === "development"
      ? "http://localhost:3000/api"
      : process.env.NEXT_PUBLIC_API_URL,
  appEnv: process.env.NEXT_PUBLIC_APP_ENV,
};
