"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./Ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./Ui/dropdown-menu";

const Header = () => {
  const router = useRouter(); // Initialize router

  // Function to handle logout
  const handleLogout = () => {
    router.push("/login"); // Redirect to login page
  };

  const handleUserlogs = () => {
    router.push("/userlogs"); //
  };

  return (
    <header className="w-full shadow-md bg-slategray flex flex-row items-center justify-between py-[5px] px-4 box-border sticky top-0 z-[99] text-[24px] text-colors-primary font-kanit">
      {/* Left Section: Logo & Title */}
      <div className="flex flex-row items-center">
        <Image
          className="h-9 w-[40px] object-cover"
          loading="lazy"
          width={53}
          height={36}
          alt="Logo"
          src="/img/logo.png"
        />
        <a className="ml-4 font-semibold">ROAD GUARD</a>
      </div>

      {/* Right Section: Avatar with Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="/img/avatar.png" alt="User Avatar" />
            <AvatarFallback>RG</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleUserlogs}>
            User Logs
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-500 cursor-pointer"
            onClick={handleLogout} // Attach logout function
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
