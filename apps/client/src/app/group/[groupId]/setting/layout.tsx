import { PVTracker } from "@/common/component/PVTracker";

export default function GroupSettingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { groupId: string };
}) {
  return (
    <div>
      <PVTracker
        name="group_setting_page_view"
        params={{ group_id: params.groupId }}
      />
      {children}
    </div>
  );
}
