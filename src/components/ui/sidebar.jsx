"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Sidebar Context
const SidebarContext = createContext();

export function SidebarProvider({ children, defaultOpen = true, open: openProp, onOpenChange }) {
  const isMobile = useIsMobile();
  const [openState, setOpenState] = useState(defaultOpen);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = onOpenChange || setOpenState;

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [isMobile, setOpen]);

  return (
    <SidebarContext.Provider value={{ open, setOpen, isMobile }}>
      <div className="flex min-h-svh w-full">{children}</div>
    </SidebarContext.Provider>
  );
}

export function Sidebar({ children, className }) {
  const { open, setOpen, isMobile } = useContext(SidebarContext);

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0" aria-label="Sidebar navigation">
          <div className="flex h-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      className={cn(
        "group peer hidden w-64 sm:flex h-full flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] ease-linear",
        !open && "w-[52px]",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function SidebarTrigger({ className, ...props }) {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div className="i-lucide-menu size-5" />
    </Button>
  );
}

export function SidebarHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-2 p-4", className)} {...props} />;
}

export function SidebarContent({ className, ...props }) {
  return <div className={cn("flex flex-1 flex-col gap-2 overflow-auto", className)} {...props} />;
}

export function SidebarFooter({ className, ...props }) {
  return <div className={cn("flex flex-col gap-2 p-4", className)} {...props} />;
}

export function SidebarInset({ children, className }) {
  return <main className={cn("flex-1", className)}>{children}</main>;
}

// MENU
export function SidebarMenu({ children, className }) {
  return <ul className={cn("flex flex-col gap-1 p-2", className)}>{children}</ul>;
}

export function SidebarMenuItem({ children }) {
  return <li>{children}</li>;
}

export function SidebarMenuButton({
  icon: Icon,
  children,
  tooltip,
  isActive,
  className,
  ...props
}) {
  const { open } = useContext(SidebarContext);

  const btn = (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition hover:bg-accent",
        isActive && "bg-accent",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {open && <span className="truncate">{children}</span>}
    </button>
  );

  if (open) return btn;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{btn}</TooltipTrigger>
        {tooltip && <TooltipContent side="right">{tooltip}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}

// Search Component Example
export function SidebarInput({ className, ...props }) {
  return <input className={cn("w-full rounded-md border bg-background p-2 text-sm", className)} {...props} />;
}

export function SidebarSeparator({ className }) {
  return <Separator className={className} />;
}

export function SidebarMenuSkeleton() {
  return <Skeleton className="h-8 w-full" />;
}
