'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu as ShadCNNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Logo from '../Logo';
import StrapLine from '../StrapLine';
import UserWelcome from '../UserWelcome';
import LoginButton from '../AuthButton';
import { useSession } from 'next-auth/react';

async function Navbar() {
  return (
    <div className="bg-white">
      <div className=" flex justify-between items-center p-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-5 items-center justify-between">
          <UserWelcome />
          <NavigationMenu />
          <LoginButton />
        </div>
      </div>
      <div className="">
        <StrapLine />
      </div>
    </div>
  );
}

const navmenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    description: '',
  },
  {
    title: 'Tasks',
    href: '/tasks',
    description: '',
  },
  {
    title: 'Projects',
    href: '/projects',
    description: '',
  },
];

export function NavigationMenu() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <ShadCNNavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {navmenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </ShadCNNavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export { Navbar };
