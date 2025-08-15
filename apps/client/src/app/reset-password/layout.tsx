import { PVTracker } from "@/common/component/PVTracker";

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PVTracker name="reset_password_page_view" params={{}} />
      {children}
    </div>
  );
}
