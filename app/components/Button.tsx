"use client";

import { signIn, signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Logout
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
    >
      Login
    </button>
  );
}

export function MainLogin() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
    >
      Login with Google
    </button>
  );
}
