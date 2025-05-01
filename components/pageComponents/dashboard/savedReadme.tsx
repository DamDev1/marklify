import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyIcon, Trash2Icon } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function SavedReadme() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Card Title</CardTitle>
            <Label className="text-muted-foreground text-[12px]">20, March 2023</Label>
          </div>
          <CardDescription className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
            necessitatibus facere natus quis ratione repellendus, deserunt quia
            eligendi ipsa pariatur, aliquam nemo impedit similique earum sequi
            incidunt consequatur iusto.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2">
          <Button className="w-[50%]">
            <CopyIcon className="mr-1 h-4 w-4" />
            Copy
          </Button>
          <Button className="w-[50%]" variant="destructive">
            <Trash2Icon className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Card Title</CardTitle>
            <Label className="text-muted-foreground text-[12px]">20, March 2023</Label>
          </div>
          <CardDescription className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
            necessitatibus facere natus quis ratione repellendus, deserunt quia
            eligendi ipsa pariatur, aliquam nemo impedit similique earum sequi
            incidunt consequatur iusto.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2">
          <Button className="w-[50%]">
            <CopyIcon className="mr-1 h-4 w-4" />
            Copy
          </Button>
          <Button className="w-[50%]" variant="destructive">
            <Trash2Icon className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Card Title</CardTitle>
            <Label className="text-muted-foreground text-[12px]">20, March 2023</Label>
          </div>
          <CardDescription className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
            necessitatibus facere natus quis ratione repellendus, deserunt quia
            eligendi ipsa pariatur, aliquam nemo impedit similique earum sequi
            incidunt consequatur iusto.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2">
          <Button className="w-[50%]">
            <CopyIcon className="mr-1 h-4 w-4" />
            Copy
          </Button>
          <Button className="w-[50%]" variant="destructive">
            <Trash2Icon className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
