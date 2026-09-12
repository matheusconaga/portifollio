import { type FormEvent, useState } from "react";
import { login } from "../../analytics/auth";
interface PrivateLoginProps {
  onAuthenticated: () => void;
  title?: string;
  description?: string;
}
export default function PrivateLogin({
  onAuthenticated,
  title = "Área privada",
  description = "Entre para acessar o painel.",
}: PrivateLoginProps) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const authenticated = await login(password);
      if (!authenticated) {
        setError("Senha incorreta.");
        return;
      }
      onAuthenticated();
    } catch {
      setError("Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      {" "}
      <div className="w-full max-w-md">
        {" "}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
          {" "}
          <div className="mb-8">
            {" "}
            <p className="mb-2 text-sm text-zinc-500"> Área privada </p>{" "}
            <h1 className="text-3xl font-semibold tracking-tight"> {title} </h1>{" "}
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {" "}
              {description}{" "}
            </p>{" "}
          </div>{" "}
          <form onSubmit={handleSubmit} className="space-y-5">
            {" "}
            <div>
              {" "}
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-zinc-300"
              >
                {" "}
                Senha{" "}
              </label>{" "}
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={loading}
                autoFocus
                autoComplete="current-password"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary/40 focus:bg-white/[0.06]"
                placeholder="Digite sua senha"
              />{" "}
            </div>{" "}
            {error && <p className="text-sm text-red-400"> {error} </p>}{" "}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {" "}
              {loading ? "Entrando..." : "Entrar"}{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}