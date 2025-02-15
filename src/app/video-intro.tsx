// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

export function VideoIntro() {
  return (
    <div className="p-8 flex flex-col lg:flex-row justify-center items-center w-full gap-4">
      <div className="w-full container overflow-hidden rounded-xl relative mx-auto max-w-6xl ">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <Image
          width={768}
          height={400}
          src="/image/Background.png"
          className="w-full object-cover scale-110 rounded-xl h-full"
          alt=""
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
          <IconButton color="white" className="rounded-full" size="lg">
            <PlayIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
      <div className="w-full px-4">
        <Typography variant="h3" color="blue-gray" className="mb-3">
          Job Search App
        </Typography>
        <Typography
          variant="paragraph"
          className="font-normal !text-gray-500 w-full"
        >
          Download our app to dive into a vast job market and find your dream
          job. We offer a wide range of jobs from all over the world. Join us
          today and take the first step towards your future.
        </Typography>
      </div>
    </div>
  );
}

export default VideoIntro;
