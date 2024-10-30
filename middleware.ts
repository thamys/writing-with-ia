import { authenticatedOnly } from "./constants/roles";

export { default } from "next-auth/middleware";

export const config = { matcher: authenticatedOnly };
