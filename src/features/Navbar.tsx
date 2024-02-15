import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
  PlusSquareIcon,
} from "lucide-react";

function LinkButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <NavLink to={href}>
      {(state) => (
        <Button
          variant={state.isActive ? "secondary" : "ghost"}
          className="gap-2 w-full justify-start"
        >
          {icon} <span className="hidden md:block">{label}</span>
        </Button>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2">
      <LinkButton href="/" icon={<HomeIcon />} label="Home" />
      <LinkButton href="/search" icon={<SearchIcon />} label="Search" />
      <Separator />

      <LinkButton href="/profile" icon={<UserIcon />} label="Profile" />
      <LinkButton href="/settings" icon={<SettingsIcon />} label="Settings" />
      <Separator />
      <LinkButton href="/add" icon={<PlusSquareIcon />} label="Post" />
    </div>
  );
}
