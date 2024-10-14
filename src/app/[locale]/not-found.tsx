"use client"; // Error components must be Client Components

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-start mt-56 min-h-screen text-center">
      <h1 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-4xl font-bold">
        404 - Página Não Encontrada
      </h1>
      <p className="mt-4 text-zinc-700 font-light">
        Desculpe, a página que você está procurando não existe.
      </p>
    </div>
  );
}
