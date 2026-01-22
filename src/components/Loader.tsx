import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base">
      <Loader2
        className="animate-spin text-accent"
        size={40}
        strokeWidth={2.5}
      />
    </div>
  );
};

export default Loader;
