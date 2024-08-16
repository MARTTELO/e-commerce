"use client";

import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrihno";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PaginaCarrinho() {
  const { itens, adicionar, remover, finalizarCompra } = useCarrinho();

  return (
    <Pagina className="flex flex-col gap-10">
      {itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        <>
          <div className="flex flex-col gap-5 mt-6 p-8">
            {itens.map((item) => (
              <AreaItemCarrinho
                key={item.produto.id}
                item={item}
                adicionar={(item) => adicionar(item.produto)}
                remover={(item) => remover(item.produto)}
              />
            ))}
          </div>
          <div className="mt-5 p-8">
            <TotalCarrinho itens={itens} finalizar={() => finalizarCompra()} />
          </div>
        </>
      )}
    </Pagina>
  );
}
