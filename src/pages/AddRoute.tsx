import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import getUID from "@/lib/getUID";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  ImageIcon,
  LinkIcon,
  PlusIcon,
  TextIcon,
  TrashIcon,
  VideoIcon,
} from "lucide-react";
import React, { ReactNode, useState } from "react";

enum ELementType {
  Text,
  Image,
  Video,
  Link,
}

interface ELement {
  id: string;
  type: ELementType;
  description: string;
  body: string;
}

function WithActionBar({
  children,
  handleDelete,
  handleMoveDown,
  handleMoveUp,
}: {
  children: ReactNode;
  handleMoveUp?: () => void;
  handleMoveDown?: () => void;
  handleDelete?: () => void;
}) {
  return (
    <div className="flex gap-2">
      <div className="grow gap-2 grid ">{children}</div>
      <div className="flex flex-col gap-1">
        <Button variant={"outline"} onClick={handleMoveUp}>
          <ArrowUpIcon />
        </Button>
        <Button variant={"outline"} onClick={handleMoveDown}>
          <ArrowDownIcon />
        </Button>
        <Button variant={"outline"} onClick={handleDelete}>
          <TrashIcon className="text-red-500" />
        </Button>
      </div>
    </div>
  );
}

function TextElement({
  body,
  setElements,
}: {
  body: string;
  setElements: React.Dispatch<React.SetStateAction<ELement[]>>;
}) {
  return (
    <WithActionBar>
      <Textarea className="w-full h-full" placeholder="Type here!">
        {body}
      </Textarea>
    </WithActionBar>
  );
}

function VideoELement({
  link,
  description,
  setElements,
}: {
  link: string;
  description: string;
  setElements: React.Dispatch<React.SetStateAction<ELement[]>>;
}) {
  return (
    <WithActionBar>
      <div>VideoELement:{description}</div>
    </WithActionBar>
  );
}

function ImageElement({
  link,
  description,
  setElements,
}: {
  link: string;
  description: string;
  setElements: React.Dispatch<React.SetStateAction<ELement[]>>;
}) {
  return <div>ImageElement:{description}</div>;
}

function LinkElement({
  link,
  description,
  setElements,
}: {
  link: string;
  description: string;
  setElements: React.Dispatch<React.SetStateAction<ELement[]>>;
}) {
  return <div>LinkElement:{description}</div>;
}

function PostEditor() {
  const [elements, setElements] = useState<ELement[]>([]);
  const addElement = (element: ELement) =>
    setElements((preElements) => [...preElements, element]);
  const addTextElement = () =>
    addElement({
      id: getUID(),
      type: ELementType.Text,
      body: "text element",
      description: "",
    });
  const addVideoElement = () =>
    addElement({
      id: getUID(),
      type: ELementType.Video,
      body: "Video element",
      description: "",
    });
  const addImageElement = () =>
    addElement({
      id: getUID(),
      type: ELementType.Image,
      body: "Image element",
      description: "",
    });
  const addLinkElement = () =>
    addElement({
      id: getUID(),
      type: ELementType.Link,
      body: "Link element",
      description: "",
    });
  return (
    <div className="grid gap-2">
      <div className="grid gap-2">
        <Input type="text" className="font-bold" placeholder="Title" />
        {elements.map((element) => {
          switch (element.type) {
            case ELementType.Text:
              return (
                <TextElement
                  key={element.id}
                  body={element.body}
                  setElements={setElements}
                />
              );
            case ELementType.Video:
              return (
                <VideoELement
                  key={element.id}
                  link={element.body}
                  description={element.description}
                  setElements={setElements}
                />
              );
            case ELementType.Image:
              return (
                <ImageElement
                  key={element.id}
                  link={element.body}
                  description={element.description}
                  setElements={setElements}
                />
              );
            case ELementType.Link:
              return (
                <LinkElement
                  key={element.id}
                  link={element.body}
                  description={element.description}
                  setElements={setElements}
                />
              );

            default:
              return <div>Unknown!</div>;
          }
        })}
      </div>
      <div className="flex gap-2">
        <Button
          variant={"outline"}
          className="gap-2 grow"
          onClick={addTextElement}
        >
          <TextIcon /> Text
        </Button>
        <Button
          variant={"outline"}
          className="gap-2 grow"
          onClick={addImageElement}
        >
          <ImageIcon /> Image
        </Button>
        <Button
          variant={"outline"}
          className="gap-2 grow"
          onClick={addVideoElement}
        >
          <VideoIcon /> Video
        </Button>
        <Button
          variant={"outline"}
          className="gap-2 grow"
          onClick={addLinkElement}
        >
          <LinkIcon /> Link
        </Button>
      </div>
    </div>
  );
}

export default function AddRoute() {
  return (
    <div className="grid gap-2 p-1 ">
      <PostEditor />
      <Button disabled>Post</Button>
    </div>
  );
}
