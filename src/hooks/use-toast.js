import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(function ToastViewport(
  { className, ...props },
  ref
) {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  );
});

const Toast = React.forwardRef(function Toast({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
        className
      )}
      {...props}
    />
  );
});

const ToastTitle = React.forwardRef(function ToastTitle(
  { className, ...props },
  ref
) {
  return <ToastPrimitives.Title ref={ref} className={cn("font-medium", className)} {...props} />;
});

const ToastDescription = React.forwardRef(function ToastDescription(
  { className, ...props },
  ref
) {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  );
});

const ToastClose = ToastPrimitives.Close;
const ToastAction = ToastPrimitives.Action;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
