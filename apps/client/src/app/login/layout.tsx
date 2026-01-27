import { PVTracker } from "@/common/component/PVTracker";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PVTracker name="login_page_view" params={{}} />
      {children}
    </div>
  );
}
