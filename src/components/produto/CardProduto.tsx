import useCarrihno from "@/data/hooks/useCarrinho"
import Produto from "@/data/model/Produto"
import Image from 'next/image'

export interface CardProdutoProps{
    produto: Produto
}

export default function CardProduto(props: CardProdutoProps){
    const {adicionar} = useCarrihno()
    const { nome, descricao, preco, imagem } = props.produto
    return(
        <div className="flex flex-col w-72 bg-zinc-800 p-3 rounded-md">
            <div className="relative w-70 h-52">
                <Image src={imagem} alt={nome} fill className="object-cover rounded-md" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{nome}</h2>
                <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
                <div className="flex justify-between items-center gap-2">
                    <span className="text-lg font-semibold mt-2">R$ {preco.toFixed(2)}</span>
                    <button className="
                    border border-purple-500 rounded-full
                    w-25 px-4 py-1
                    hover:bg-purple-900 text-white" onClick={()=> adicionar(props.produto)}>Adicionar</button>
                </div> 

            </div>
        </div>
    )
}