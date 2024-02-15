import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/features/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen gap-2 p-2 md:p-4 relative">
      <Navbar />
      <ScrollArea className="flex justify-center grow">
        <div className="max-w-screen-md grow mr-3">
          <Outlet />
        </div>
      </ScrollArea>
    </div>
  );
}
