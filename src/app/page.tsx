import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="p-5">
      <div className="w-full flex gap-x-4 justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-3xl text-blue-600 font-inter">Home Page</h1>
    </div>
  );
}
