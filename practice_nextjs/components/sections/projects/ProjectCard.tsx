import Image, { StaticImageData } from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface TProjectCardProps {
  title: string;
  subtitle: string;
  badges: string | string[];
  description: string | string[];
  github: string;
  link: string;
  images: StaticImageData[];
}

// bg-gradient-to-tl from-purple-950 from-5% via-black via-80% to-purple-950

async function ProjectCard({ data }: { data: TProjectCardProps }) {
  const { title, subtitle, badges, description, github, link, images } = {
    ...data,
  };
  return (
    <>
      <Card className="w-fit max-w-96 flex flex-col gap-2 justify-between text-white bg-transparent">
        {/* <div className="p-3 pb-0 rounded-lg overflow-clip h-64">
          <Carousel>
            <CarouselContent>
              {images.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <Image
                      alt=""
                      src={item}
                      width={150}
                      height={150}
                      className="w-full h-10]"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div> */}
        <div className="flex flex-col justify-between flex-1">
          <CardHeader>
            <CardTitle className=" text-center">{title}</CardTitle>
            <CardDescription className=" text-center">
              {subtitle}
            </CardDescription>
            <div className="flex flex-row items-center justify-center gap-2 flex-wrap">
              {typeof badges === "string" ? (
                <p>{badges}</p>
              ) : (
                badges.map((item, index) => {
                  return (
                    <Badge
                      key={index}
                      className="bg-black border-b border-purple-800"
                    >
                      {item}
                    </Badge>
                  );
                })
              )}
            </div>
          </CardHeader>
          <CardContent className=" text-center">
            {typeof description === "string" ? (
              <p className="line-clamp-2">{description} </p>
            ) : (
              description.map((item, index) => {
                return (
                  <p key={index} className="line-clamp-2">
                    {item}
                  </p>
                );
              })
            )}
          </CardContent>
          <CardFooter className="gap-4 justify-center text-black">
            {github && (
              <a href={github} target="blank">
                <Button variant="outline" size="icon">
                  <FaGithub className="h-4 w-4" />
                </Button>
              </a>
            )}
            {link && (
              <a href={link} target="blank">
                <Button variant="outline">Demo</Button>
              </a>
            )}
          </CardFooter>
        </div>
      </Card>
    </>
  );
}

export default ProjectCard;
