import { Outlet } from "react-router-dom"

export default function RootLayout({ displayName }) {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--color-text)] py-10 bg-gradient-to-br from-color-main-to-aux">
      <header className="flex justify-center pb-10 text-3xl">
        {displayName && `👋 Hi, ${displayName.split(" ")[0]}! 👋`}
        {!displayName && "👋 Hi, please sign in with Google to use this live-chat! 👋"}
      </header>

      <Outlet />
    </div>
  );
}