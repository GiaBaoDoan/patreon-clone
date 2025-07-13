import SearchInput from "@/components/search-input";
import { TagList } from "@/components/tag-list";
import { Tags } from "@/data/tags";

const Header = () => {
  return (
    <header className="flex flex-col justify-center h-auto! shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 p-6">
      <SearchInput />
      <TagList tags={Tags} />
    </header>
  );
};

export default Header;
