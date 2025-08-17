import { PVTracker } from "@/common/component/PVTracker";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PVTracker name="signup_page_view" params={{}} />
      {children}
    </div>
  );
}
