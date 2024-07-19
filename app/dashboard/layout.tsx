import NavLinks from "../ui/dashboard/nav-links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavLinks />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
export default Layout;
