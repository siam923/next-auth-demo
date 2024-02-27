"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export const BackButton = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
