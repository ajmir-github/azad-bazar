import { IconType } from "react-icons";
import { CgHome } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RiSettings3Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";
import { PiSignOut } from "react-icons/pi";
import { PiSignIn } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const wrap =
  (Icon: IconType) =>
  ({ size, className }: { size?: number; className?: string }) =>
    <Icon size={size || 22} className={className} />;

export const HomeIcon = wrap(CgHome);
export const SearchIcon = wrap(IoSearch);
export const PlusIcon = wrap(FaRegSquarePlus);
export const SettingsIcon = wrap(RiSettings3Line);
export const AvatarIcon = wrap(RxAvatar);
export const MenuIcon = wrap(BsThreeDotsVertical);
export const LinkIcon = wrap(FaRegHeart);
export const CommentIcon = wrap(FaRegComment);
export const SendIcon = wrap(FiSend);
export const ShareIcon = wrap(FiShare);
export const ThemeIcon = wrap(CgDarkMode);
export const SignOutIcon = wrap(PiSignOut);
export const SignInIcon = wrap(PiSignIn);
export const EditIcon = wrap(FaEdit);
export const AppIcon = wrap(FaInstagram);
