import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full">
        <div className="max-w-2xl py-20 mx-8 sm:mx-auto">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  );
}
