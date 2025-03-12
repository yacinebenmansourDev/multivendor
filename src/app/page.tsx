import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl text-blue-600 font-inter">
        Hello to multivendor
      </h1>
      <Button>Click me</Button>
    </div>
  );
}
