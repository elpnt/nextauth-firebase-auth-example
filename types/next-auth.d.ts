import NextAuth from "next-auth"
import { auth } from "firebase-admin"

declare module "next-auth" {
  interface User extends auth.DecodedIdToken {}
}
