import { Outlet } from "react-router-dom"

export default function RootLayout({ app, user }) {
  return (
    <div className="flex flex-col pt-10 min-h-screen bg-[var(--bg-color)] text-[var(--color-text)] font-serif">
      <Outlet context={{ app, user }} />
    </div>
  );
}