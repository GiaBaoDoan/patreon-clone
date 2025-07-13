import { AppSidebar } from "@/components/app-sidebar";
import ExploreTopics from "@/components/explore-topics";
import Header from "@/components/header";
import NewBatreon from "@/components/new-patreon";
import Paramol from "@/components/paramol";
import PopularsWeek from "@/components/popular-weeks";
import RecentVisits from "@/components/recent-visits";
import RecentlyVisited from "@/components/recently-visited";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <div className="md:hidden px-6 py-3 flex items-center justify-between border-b relative">
          <SidebarTrigger />

          {/* Tiêu đề ở giữa tuyệt đối */}
          <h2 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
            Explore
          </h2>

          <div className="w-6" />
        </div>

        <Header />
        <RecentlyVisited />
        <RecentVisits />
        <PopularsWeek />
        <ExploreTopics />
        <NewBatreon />
        <Paramol />
      </SidebarInset>
    </SidebarProvider>
  );
}
