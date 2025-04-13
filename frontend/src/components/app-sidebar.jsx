import SidebarComp from "@/components/SidebarComp";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../components/ui/sidebar";

export function AppSidebar() {
  return (

      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarComp />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>

  );
}
