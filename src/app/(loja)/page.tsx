'use client'
import CardProduto from "@/components/produto/CardProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Home() {
  return (
    <Pagina>
      <div className="flex gap-5 flex-wrap justify-center mt-5">
      {produtos.map(produto => (
        <CardProduto key={produto.id} produto={produto}></CardProduto>
      ))}

      </div>
    </Pagina>
  );
}
