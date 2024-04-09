import SideNavbar from "@/components/sideNav/SideNavbar";

export default function ReactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <main className="flex gap-2 flex-col md:flex-row md:items-start md:justify-start items-center justify-start">
        <SideNavbar />
        {children}
        </main>;
  }
  