export default function ReactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full">{children}</main>;
}