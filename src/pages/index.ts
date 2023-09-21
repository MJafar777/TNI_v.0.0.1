import { lazy } from "react";

export const HomeAsync = lazy(() => import("./home/Home"));
export const AboutAsync = lazy(() => import("./about/About"));
export const ProductsAsync = lazy(() => import("./products/ui/Products.tsx"));
export const LoginAsync =lazy(()=>import('./auth/Login.tsx'))