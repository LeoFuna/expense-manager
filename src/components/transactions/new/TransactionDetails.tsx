'use client'
import { Button } from "@/components/core/Button";
import { useFetch } from "@/hooks/fetch";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";

/*
  - Categoria: Terao os itens de transactionCategory
    lembrando de considerar o operationType para listar somente os tipos certos
  - Descrição: campo simples de texto
  - Anexo: TO DO: inicialmente nao tera mas planejaremos
  - Recorrente: TO DO: planejar como implementar para que nao precisemos todos
    os meses criar transacoes de custos fixos
  - Botao para processeguir
*/
export default function TransactionDetails({ operationType }: Pick<ITransactionCategory, 'operationType'>) {
  const { data } = useFetch({
    url: '/api/transaction-categories',
    params: {
      operationType,
    },
    dependencies: [operationType],
  });
  return (
    <div className="absolute flex flex-col p-4 py-9 h-[65%] rounded-t-3xl w-full bottom-0 left-0 right-0 bg-light-100">
      <div className="flex flex-col gap-4 h-4/5">
        <select className="bg-light-100 text-light-20 border-light-40 border p-4 rounded-xl" name="category" id="category">
          <option value="0">Categoria</option>
          {data?.map((category: ITransactionCategory) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          className="text-light-20 border-light-40 border p-3 rounded-xl"
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
        />
      </div>
      <Button>Salvar</Button>
    </div>
  )
}
