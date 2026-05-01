import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("should successfully submit a contact form with valid data", async () => {
    const validData = {
      name: "João Silva",
      email: "joao@example.com",
      phone: "(85) 9 8765-4321",
      message: "Gostaria de um orçamento para um website profissional.",
    };

    const result = await caller.contact.submit(validData);

    expect(result).toEqual({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  });

  it("should reject submission with invalid email", async () => {
    const invalidData = {
      name: "João Silva",
      email: "invalid-email",
      phone: "(85) 9 8765-4321",
      message: "Gostaria de um orçamento para um website profissional.",
    };

    try {
      await caller.contact.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Email inválido");
    }
  });

  it("should reject submission with short name", async () => {
    const invalidData = {
      name: "J",
      email: "joao@example.com",
      phone: "(85) 9 8765-4321",
      message: "Gostaria de um orçamento para um website profissional.",
    };

    try {
      await caller.contact.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Nome deve ter pelo menos 2 caracteres");
    }
  });

  it("should reject submission with short message", async () => {
    const invalidData = {
      name: "João Silva",
      email: "joao@example.com",
      phone: "(85) 9 8765-4321",
      message: "Oi",
    };

    try {
      await caller.contact.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Mensagem deve ter pelo menos 10 caracteres");
    }
  });

  it("should accept submission without phone number", async () => {
    const dataWithoutPhone = {
      name: "João Silva",
      email: "joao@example.com",
      message: "Gostaria de um orçamento para um website profissional.",
    };

    const result = await caller.contact.submit(dataWithoutPhone);

    expect(result).toEqual({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  });
});
