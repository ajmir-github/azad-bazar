import { AppIcon } from "@/components/Icons";
import { useAppSelector } from "@/context";
import authSlice from "@/context/authSlice";
import { authServices } from "@/services";
import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    authServices.observerAuthState((user) => {
      console.log(user);
    });
  }, []);
  return (
    <div
      className="flex justify-center items-center flex-col min-h-screen"
      data-theme={theme}
    >
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <AppIcon size={128} className="text-primary animate-pulse" />
          <i className="opacity-50">Loading..</i>
        </div>
      ) : (
        <div className="flex flex-col grow w-full max-w-screen-md">
          {children}
        </div>
      )}
    </div>
  );
}
