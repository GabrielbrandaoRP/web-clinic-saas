type Appointment = {
    id: string;
    patient: string;
    date: string,
    status: "Pendente" | "Confirmado" | "Cancelado" | "Realizado";
    email: string

}

export const appointments: Appointment[] = [
  {
    id: "1",
    patient: "João Silva",
    date: "2026-03-25",
    status: "Confirmado",
    email: "joao.silva@email.com"
  },
  {
    id: "2",
    patient: "Maria Oliveira",
    date: "2026-03-26",
    status: "Pendente",
    email: "maria.oliveira@email.com"
  },
  {
    id: "3",
    patient: "Carlos Santos",
    date: "2026-03-27",
    status: "Cancelado",
    email: "carlos.santos@email.com"
  },
  {
    id: "4",
    patient: "Ana Souza",
    date: "2026-03-28",
    status: "Realizado",
    email: "ana.souza@email.com"
  },
  {
    id: "5",
    patient: "Pedro Lima",
    date: "2026-03-29",
    status: "Confirmado",
    email: "pedro.lima@email.com"
  },
  {
    id: "6",
    patient: "Juliana Costa",
    date: "2026-03-30",
    status: "Pendente",
    email: "juliana.costa@email.com"
  },
  {
    id: "7",
    patient: "Rafael Pereira",
    date: "2026-03-31",
    status: "Realizado",
    email: "rafael.pereira@email.com"
  },
  {
    id: "8",
    patient: "Fernanda Alves",
    date: "2026-04-01",
    status: "Cancelado",
    email: "fernanda.alves@email.com"
  },
  {
    id: "9",
    patient: "Bruno Rocha",
    date: "2026-04-02",
    status: "Confirmado",
    email: "bruno.rocha@email.com"
  },
  {
    id: "10",
    patient: "Patrícia Gomes",
    date: "2026-04-03",
    status: "Pendente",
    email: "patricia.gomes@email.com"
  },
  {
    id: "11",
    patient: "Lucas Martins",
    date: "2026-04-04",
    status: "Realizado",
    email: "lucas.martins@email.com"
  },
  {
    id: "12",
    patient: "Camila Ribeiro",
    date: "2026-04-05",
    status: "Confirmado",
    email: "camila.ribeiro@email.com"
  },
  {
    id: "13",
    patient: "Gustavo Carvalho",
    date: "2026-04-06",
    status: "Cancelado",
    email: "gustavo.carvalho@email.com"
  },
  {
    id: "14",
    patient: "Aline Fernandes",
    date: "2026-04-07",
    status: "Pendente",
    email: "aline.fernandes@email.com"
  },
  {
    id: "15",
    patient: "Diego Barbosa",
    date: "2026-04-08",
    status: "Realizado",
    email: "diego.barbosa@email.com"
  }
];