"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            item={"Home"}
            setActive={setActive}
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advance composition</HoveredLink>
            <HoveredLink href="/courses">Song Writting</HoveredLink>
            <HoveredLink href="/courses">Music Composition</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            active={active}
            item={"Contact"}
            setActive={setActive}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
