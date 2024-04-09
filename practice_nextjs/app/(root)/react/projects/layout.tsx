import SideNavbar from "@/components/sideNav/SideNavbar";

export default function ReactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
