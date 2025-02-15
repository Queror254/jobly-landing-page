// @ts-nocheck
"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "How do I create an account?",
    desc: "Signing up is easy! Click on 'Sign Up', fill in your details, and start exploring job opportunities right away.",
  },
  {
    title: "Is Jobly free to use?",
    desc: "Yes! Job seekers can browse and apply for jobs for free. We also offer premium features for enhanced job search capabilities.",
  },
  {
    title: "How do I apply for jobs?",
    desc: "Once you find a job listing that interests you, click ‘Apply Now’ and follow the application instructions provided by the employer.",
  },
  {
    title: "Can employers contact me directly?",
    desc: "Yes! If your profile is complete, employers can view your resume and reach out to you directly for job opportunities.",
  },
  {
    title: "How do I upgrade to Jobly Premium?",
    desc: "To unlock premium features, log in and go to the ‘Upgrade’ section in your dashboard. Choose a plan and complete the payment process.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our support team is available 24/7. Contact us via live chat, email, or phone, and we'll be happy to assist you.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
