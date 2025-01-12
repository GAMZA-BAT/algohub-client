"use client";

import type { groupSchema } from "@/app/api/groups/schema";
import type { z } from "zod";

export const getGroupFormData = ({
  name,
  introduction,
  startDate,
  endDate,
  groupImage,
}: z.infer<typeof groupSchema>) => {
  const data = new FormData();

  if (groupImage instanceof File) {
    data.append("groupImage", groupImage);
  } else if (!groupImage) {
    data.append("groupImage", "");
  }

  data.append(
    "request",
    JSON.stringify({
      name,
      introduction,
      startDate: startDate.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10),
    }),
  );

  return data;
};
