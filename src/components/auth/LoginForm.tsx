"use client";

/**
 * ============================================================================
 * COMPONENTE DE APRESENTAÇÃO: LoginForm
 * ============================================================================
 * 
 * Papel deste componente:
 * - Renderiza a estrutura visual do formulário de autenticação.
 * - Utiliza os componentes primitivos da biblioteca shadcn/ui (Button, Input, Label).
 * - Conecta a interface ao custom hook `useLogin`, mantendo o componente
 *   100% focado na camada de apresentação (View).
 * - Fundo branco e design minimalista, atendendo aos requisitos da aula.
 */

import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  // Consumindo estados e funções do Custom Hook
  const { credentials, isLoading, feedback, handleInputChange, handleSubmit } =
    useLogin();

  return (
    <div className="flex items-center justify-center w-100 h-120 bg-white p-4 rounded-lg">
      {/* Container principal do formulário com largura máxima controlada */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        {/* Campo de Email */}
        <div className="space-y-1">
            <h4 className="font-bold text-blue-800">BEM-VINDO</h4>
            <h2 className="font-bold text-3xl">Entre na sua conta</h2>
            <p className="text-gray-400">Use seus dados de acesso para continuar.</p>
  
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            value={credentials.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
          />
        </div>

        {/* Campo de Senha */}
        <div className="space-y-1">
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={credentials.senha}
            onChange={(e) => handleInputChange("senha", e.target.value)}
            required
            disabled={isLoading}
            autoComplete="current-password"
          />
        </div>

        {/* Botão de Ação: Entrar */}
        <Button
          type="submit"
          className="w-full bg-blue-800 hover: bg-blue-900"
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
        <p className="text-gray-400">Protótipo visual. Nenhuma credencial real é enviada.</p>
        {/* Área de exibição de feedback (Mensagem de sucesso ou erro) */}
        {feedback.message && (
          <div
            role="alert"
            className={`text-center text-sm font-medium transition-all ${
              feedback.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {feedback.message}
          </div>
        )}
      </form>
    </div>
  );
}