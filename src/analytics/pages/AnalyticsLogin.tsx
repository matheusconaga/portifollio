import {
  type FormEvent,
  useState,
} from "react";

import { login } from "../auth";

interface AnalyticsLoginProps {
  onAuthenticated: () => void;
}

export default function AnalyticsLogin({
  onAuthenticated,
}: AnalyticsLoginProps) {
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const authenticated =
        await login(password);

      if (!authenticated) {
        setError(
          "Senha incorreta.",
        );
        return;
      }

      onAuthenticated();
    } catch {
      setError(
        "Não foi possível conectar ao servidor.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-400">
              Área privada
            </p>

            <h1 className="text-3xl font-semibold">
              Analytics
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Entre para visualizar as métricas
              do portfólio.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm"
              >
                Senha
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value,
                  )
                }
                disabled={loading}
                autoFocus
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-white/30"
                placeholder="Digite sua senha"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={
                loading || !password
              }
              className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Entrando..."
                : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}