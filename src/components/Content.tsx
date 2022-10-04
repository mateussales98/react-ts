import { MagnifyingGlass } from "phosphor-react";
import { LineTable } from "./LineTable";

export function Content() {
  const pessoas = [
    {
      id: 1,
      name: "João Pedro",
      age: 25,
    },
    {
      id: 2,
      name: "Maria",
      age: 30,
    },
  ];
  return (
    <>
      <div className="w-[1120px] mx-auto mt-10  ">
        <div className=" flex flex-1 gap-4  justify-betweens my-10">
          <div className="flex flex-1 gap-3 items-center ">
            <label>Buscar: </label>
            <input className="rounded-lg" type="text" placeholder="Fake Busca" />
          </div>
          <div>
            <button>
              {" "}
              <MagnifyingGlass />{" "}
            </button>
          </div>
        </div>

        <table className="table-auto w-full ">
          <thead className="">
            <tr className="text-zinc-900  ">
              <th> Nome </th>
              <th> Idade </th>
            </tr>
          </thead>
          <tbody className="">
            {pessoas.map((pessoa) => (
              <LineTable
                key={pessoa.id}
                id={pessoa.id}
                name={pessoa.name}
                age={pessoa.age}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
