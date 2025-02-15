// @ts-nocheck
"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Jobly helped me land my dream job in just a few weeks! The platform is easy to use, and the job recommendations were spot on.",
    client: "Alex Johnson",
    title: "Software Engineer @ TechCorp",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "As a recruiter, Jobly has made the hiring process seamless. The quality of candidates is excellent, and the support team is always helpful.",
    client: "Sophia Martinez",
    title: "HR Manager @ Innovate Solutions",
    img: "/image/avatar2.jpeg",
  },
  {
    feedback:
      "I was struggling to find remote opportunities, but Jobly provided me with personalized job alerts that led to my current role. Highly recommended!",
    client: "Daniel Lee",
    title: "Digital Marketer @ Freelance",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Jobly Users Say
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Discover what our valued clients have to say about their experiences
            with Jobly. We are proud to have a community of users who trust us
            to help them find their dream job.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
