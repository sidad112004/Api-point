"use client";

import { SessionProvider } from "next-auth/react";
export default function provider({children}:any){
   return <SessionProvider>{children}</SessionProvider>
}