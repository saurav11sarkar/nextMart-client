export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  role?: "user" | "admin";
  iat?: number;
  exp?: number;
}
