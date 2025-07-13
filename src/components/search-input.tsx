import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-lg py-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
      <Input
        type="text"
        placeholder="Search creators or topics"
        className="pl-9 rounded-full shadow-none bg-slate-50 border border-slate-200"
      />
    </div>
  );
};

export default SearchInput;
