// src/app/api/inngest/route.ts
import { serve } from "inngest/next";
import {
  createUserOrder,
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation
} from "@/config/inngest";  // ✅ CORRECT
// import { processTask } from "../../../inngest/functions";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder
  ],
});