import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "ray", name: "Rayan" },
    { id: "cla", name: "Clara" },
  ];
  return (
    <div>
      <h1>THE CLIENT PAGE</h1>
      <ul>
        {clients.map((client) =>  (
            <li key={client.id}>
              <Link href={`/clients/${client.name}`}>{client.name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ClientsPage;
