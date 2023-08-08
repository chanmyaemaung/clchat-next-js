"use server";

import { getServerSession } from "next-auth";
import { prisma } from "./lib/db";
import { authOptions } from "./lib/auth";

export async function postData(formData: FormData) {
  "use server";
  const Pusher = require("pusher");

  const session = await getServerSession(authOptions);
  const message = formData.get("message") as string;

  const data = await prisma.message.create({
    data: {
      message,
      email: session?.user?.email,
    },
    include: {
      User: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    useTLS: true,
  });

  pusher.trigger("clchat-channel", "clchat-event", {
    message: `${JSON.stringify(data)}\n\n`,
  });
}
