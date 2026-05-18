// app/loading.tsx

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center space-y-4">
      {/* Animated Loading Spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900 dark:border-neutral-800 dark:border-t-neutral-100" />
      
      {/* Accessible Screen Reader Text */}
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 animate-pulse">
        Loading content, please wait...
      </p>
    </div>
  );
}
