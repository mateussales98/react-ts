
interface Pessoa {
  id?: number;
  name: string;
  age: number;
}
export function LineTable({ id , name, age}: Pessoa) {
  return (
      <tr className=" rounded-lg hover:bg-zinc-200 text-center  align-middle justify-center ">
        <td className="">{name}</td>
        <td className="">{age}</td>
      </tr>
  );
}
