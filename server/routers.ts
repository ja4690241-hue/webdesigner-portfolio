import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("Email inválido"),
          phone: z.string().optional(),
          message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContact({
            name: input.name,
            email: input.email,
            phone: input.phone || null,
            message: input.message,
            status: "new",
          });

          // Notify owner about new contact
          await notifyOwner({
            title: "Novo Contato Recebido",
            content: `${input.name} (${input.email}) enviou uma mensagem: ${input.message.substring(0, 100)}...`,
          });

          return { success: true, message: "Mensagem enviada com sucesso!" };
        } catch (error) {
          console.error("Error submitting contact:", error);
          throw new Error("Erro ao enviar mensagem. Tente novamente.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
