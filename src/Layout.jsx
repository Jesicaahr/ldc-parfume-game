import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex min-h-screen flex-wrap items-center justify-center bg-game-grey">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
