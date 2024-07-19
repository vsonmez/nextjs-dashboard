import "@/app/ui/global.css";
import { inter } from "@/app/ui/font";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <div className="w-full flex-none border-b flex">
            <Link href="/dashboard" className="p-2">
              Dashboard
            </Link>
            {/* <a href="/dashboard">Dashboard</a> */}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
