"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const components: {
  title: string;
  href: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Whatsapp",
    icon: <Phone />,
    href: "https://api.whatsapp.com/send?phone=6282231888611",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Email",
    icon: <Mail />,
    href: "mailto:fantocaa17@gmail.com",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Tracking", path: "/tracking" },
  { id: 5, name: "Careers", path: "https://karier.tako.co.id/" },
];

export function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Periksa apakah arah scroll berubah
      if (isScrollingDown && isVisible) {
        setIsVisible(false); // Sembunyikan navbar jika sedang digulir ke bawah
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true); // Tampilkan navbar jika sedang digulir ke atas
      }
      setPrevScrollPos(currentScrollPos); // Simpan posisi scroll saat ini
    };

    // Tambahkan event listener untuk meng-handle scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  // Variabel untuk mengatur durasi animasi
  const transitionDuration = 0.2;

  // Variabel untuk mengatur animasi navbar saat muncul atau menghilang
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Jalankan animasi menggunakan Framer Motion controls
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    { title: string; icon: JSX.Element; href: string; className?: string }
  >(({ className, title, icon, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="flex items-center space-x-2">
              {icon}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <>
      <nav>
        <motion.div
          className="mx-auto bg-white bg-opacity-90 fixed top-0 left-0 right-0 z-50 backdrop-blur"
          initial="visible"
          animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/logo/atmlogo.png"
                  alt="logo"
                  width={256}
                  height={64}
                />
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  {NavLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                      <Link
                        href={link.path}
                        className={isActive(link.path) ? "active" : ""}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          // className={navigationMenuTriggerStyle()}
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(link.path)
                              ? "active bg-slate-50 text-blueatm-900 font-semibold"
                              : "font-medium bg-transparent"
                          }`}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium bg-transparent">
                      Contact Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4 md:w-[500px] lg:w-[200px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            icon={component.icon}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
