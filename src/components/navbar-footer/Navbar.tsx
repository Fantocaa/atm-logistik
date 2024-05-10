"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Truck } from "lucide-react";

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
    href: "mailto:marketing@atmtrans.id",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  // { id: 4, name: "Tracking", path: "/tracking" },
  { id: 5, name: "Careers", path: "https://karier.tako.co.id/" },
];

export function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  const transitionDuration = 0.2;

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    { title: string; icon: JSX.Element; href: string; className?: string }
  >(({ className, title, icon, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
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
          </Link>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <>
      <nav>
        <motion.div
          // className="mx-auto bg-white bg-opacity-90 fixed top-0 left-0 right-0 z-50 backdrop-blur"
          className="mx-auto bg-blueatm-900 fixed top-0 left-0 right-0 z-50"
          initial="visible"
          // animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/logo/atmlogoputih.png"
                  alt="logo"
                  width={320}
                  height={64}
                  className="w-64 md:w-80"
                />
              </Link>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <NavigationMenu className="hidden md:block">
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
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(link.path)
                              ? "active bg-slate-50 text-blueatm-900 font-semibold"
                              : "font-medium bg-transparent text-white"
                          }`}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium bg-transparent text-white">
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

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40" // Pastikan z-index lebih rendah dari sidebar
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed inset-0 overflow-hidden z-50"
          >
            <div className="relative w-64 h-full bg-blueatm-900 shadow-xl">
              <div className="flex items-center justify-between p-4 py-[18px] border-b border-gray-200">
                <Link className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/images/logo/atmlogoputih.png"
                    alt="logo"
                    width={320}
                    height={64}
                    className="w-[90%] md:w-40"
                  />
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4">
                <Link
                  href="/"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <Menu />
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <User />
                  About
                </Link>
                <Link
                  href="/services"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <ClipboardList />
                  Services
                </Link>
                <Link
                  href="https://karier.tako.co.id/"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <BookOpenText />
                  Careers
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
