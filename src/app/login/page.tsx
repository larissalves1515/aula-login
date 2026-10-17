/**
 * ============================================================================
 * ROTA: /login (src/app/login/page.tsx)
 * ============================================================================
 * 
 * Papel desta página no Next.js (App Router):
 * - Atua como um Server Component por padrão.
 * - Define metadados específicos para a rota (título da aba, descrição SEO).
 * - Renderiza o componente cliente LoginForm, mantendo as fronteiras
 *   entre Server Components e Client Components bem definidas.
 */

import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login • Aula Next.js",
  description: "Página de autenticação simples e modular com shadcn/ui.",
};

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex flex-row bg-blue-900 justify-center items-center p-40 gap-2">


      <div className="text-white w-1/2 flex flex-col gap-5">
        <h3 className="font-bold">ACESSO AO SISTEMA</h3>
        <h1 className="text-5xl">Organize seus cadastros em um só lugar.</h1>
        <h2 className="text-gray-300">Um modelo simples para demonstrar autenticação, navegação e operações CRUD.</h2>

        <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center font-bold">01</div>
            <h4 className="text-gray-300">Autenticação por chave de API</h4>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center font-bold">02</div>
          <h4 className="text-gray-300">cadastro e consulta de pessoas</h4>

        </div>
      </div>

      <LoginForm />
   
    </main>
  );
}
