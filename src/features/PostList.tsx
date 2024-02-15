import { CommentIcon } from "@/components/Icons";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { HeartIcon, MoreVerticalIcon, SendIcon } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function generatePosts() {
  let array = [];
  for (let index = 1; index <= 30; index++) {
    array.push(index);
  }
  return array;
}

function UserProfileLink({
  fullName,
  id,
  date,
  image,
  className,
}: {
  fullName: string;
  id: string;
  date: Date;
  image?: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "flex gap-2 md:gap-4 items-center w-full rounded-l-full rounded-r-md hover:bg-gray-500/20 transition-colors duration-200",
        className
      )}
      to={`/profile/${id}`}
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={image} alt={fullName} />
        <AvatarFallback>{fullName.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <div className="opacity-70 text-sm font-bold">{fullName}</div>
        <div className="opacity-70 text-sm">
          {dayjs(date).format("D MMM YYYY")}
        </div>
      </div>
    </Link>
  );
}

function PostCard() {
  const [commmentSection, setCommentSection] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-2 md:gap-4 items-center">
          <UserProfileLink
            id="asd"
            date={new Date()}
            fullName="Ajmir Raziqi"
            image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"ghost"}>
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* visual content */}
        <img
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </CardContent>

      <CardContent className="mt-2 py-2">
        {/* textual content */}
        <p className="prose-lg opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam
          esse doloremque ipsum magni a. Amet rem, nulla eius voluptatibus dolor
          ea cumque obcaecati quaerat dignissimos soluta perferendis assumenda
          iste.
        </p>
      </CardContent>

      <CardFooter className="flex p-2 gap-2">
        <Button
          variant={liked ? "default" : "ghost"}
          className="join-item grow gap-2"
          onClick={handleLike}
        >
          <HeartIcon />
          <Separator orientation="vertical" />
          <span className="text-xs opacity-70">24 links</span>
        </Button>
        <Button
          variant={commmentSection ? "default" : "ghost"}
          className="join-item grow gap-2"
          onClick={() => setCommentSection((a) => !a)}
        >
          <CommentIcon />
          <Separator orientation="vertical" />
          <span className="text-xs opacity-70">2 Comments</span>
        </Button>
      </CardFooter>

      <Collapsible open={commmentSection}>
        <CollapsibleContent>
          <div className="p-6 flex flex-col gap-4 bg-slate-500/20">
            <div className="grid gap-4">
              <UserProfileLink
                id="asd"
                date={new Date()}
                fullName="Ajmir Raziqi"
                image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <p className="flex flex-col grow items-end opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                ad in iusto quis ipsam quas aliquam eligendi, assumenda nemo
                provident corrupti molestiae voluptatibus dolorum sapiente?
                Possimus nesciunt eius veniam impedit?
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Textarea
                placeholder="Write a comment..."
                className="w-full h-120"
              />
              <Button variant={"secondary"}>
                <SendIcon />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export default function PostList() {
  const posts = generatePosts();
  return (
    <div className="flex flex-col gap-2">
      {posts.map((index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
