import { useAppSelector } from "@/context";
import PostList from "@/features/PostList";
import UserMetaData from "@/features/UserMetaData";

export default function ProfileRoute() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="grid gap-2 md:gap-4">
      <UserMetaData />
      <div className="divider">Posts (23)</div>
      <PostList />
    </div>
  );
}
