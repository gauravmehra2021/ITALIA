"use client"; // Error boundaries MUST be Client Components

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void; // Function to attempt re-rendering the route segment
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an external error reporting service (e.g., Sentry, LogRocket)
    console.error("Caught app error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-4">
        {/* Visual Anchor Indicator */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
          ⚠️
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Something went wrong!
        </h2>
        
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          An unexpected application error occurred. Our team has been notified.
        </p>

        {/* Optional: Error ID / Digest for tracking */}
        {error.digest && (
          <p className="font-mono text-xs text-neutral-400 bg-neutral-100 dark:bg-neutral-800 p-2 rounded">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex justify-center gap-4 pt-2">
          {/* Action Buttons */}
          <button
            onClick={() => reset()}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors"
          >
            Try Again
          </button>
          
          <a
            href="/"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
