"use client";

import type { groupSchema } from "@/app/api/groups/schema";
import type { z } from "zod";

export const getGroupFormData = (values: z.infer<typeof groupSchema>) => {
  const data = new FormData();

  if (values.groupImage) {
    data.append("groupImage", values.groupImage);
  } else {
    data.append("groupImage", "");
  }
  data.append(
    "request",
    JSON.stringify({
      name: values.name,
      introduction: values.introduction,
      startDate: values.startDate.toISOString().slice(0, 10),
      endDate: values.endDate.toISOString().slice(0, 10),
    }),
  );

  return data;
};
