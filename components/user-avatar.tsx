"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

const GET_USER_PROFILE = gql`
  query GetUserProfile {
    me {
      id
      name
      email
      profilePicture
    }
  }
`;

export function UserAvatar() {
  const { data: session, status } = useSession();

  const { data } = useQuery(GET_USER_PROFILE, {
    skip: status !== "authenticated",
  });

  if (status !== "authenticated") {
    return null;
  }

  const user = data?.me || session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.profilePicture || user?.image}
              alt={user?.name || "Profile"}
            />
            <AvatarFallback className="text-xs">
              {user?.name?.charAt(0)?.toUpperCase() || <User className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}