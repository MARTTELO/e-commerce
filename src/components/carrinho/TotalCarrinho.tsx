import ItemCarrinho from '@/data/model/ItemCarrinho'
import Link from 'next/link'

export interface TotalCarrinhoProps {
    itens: ItemCarrinho[]
    finalizar: ()=> void
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)

    return (
        <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
            <div className="flex flex-col justify-between">
                <span className=" text-zinc-500">Total</span>
                <span className="text-3xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
            </div>
            <Link href="/">
                <button onClick={props.finalizar} className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
            </Link>
        </div>
    )
}