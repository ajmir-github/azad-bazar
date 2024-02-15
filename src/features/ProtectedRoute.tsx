import { useAppSelector } from "@/context";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const signed = useAppSelector((state) => state.auth.signed);
  if (!signed) return <Navigate to={"/register"} />;
  return children;
}
