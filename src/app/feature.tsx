// @ts-nocheck
"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "AI-Powered Job Matching",
    children:
      "Get job recommendations tailored to your skills, experience, and preferences using our intelligent matching system.",
  },
  {
    icon: HeartIcon,
    title: "Seamless Job Applications",
    children:
      "Apply to jobs with one click and track your applications effortlessly from a single dashboard.",
  },
  {
    icon: LockClosedIcon,
    title: "Verified Employers",
    children:
      "We partner with trusted companies, ensuring you apply to genuine opportunities with competitive salaries.",
  },
  {
    icon: LightBulbIcon,
    title: "Career Growth & Insights",
    children:
      "Access salary trends, career advice, and industry insights to stay ahead in the job market.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Find Your Next Dream Job
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Explore Top Job Opportunities
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Access thousands of job listings across various industries, from tech
          and finance to marketing and design.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
