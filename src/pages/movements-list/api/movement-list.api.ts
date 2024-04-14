import axios from "axios";
import { Movement } from "./movement-list.api-model";

export const getMovementList = (accountId: string): Promise<Movement[]> => {
  const urlMovements = `${
    import.meta.env.VITE_BASE_API_URL
  }/movements?accountId=${accountId}`;

  return axios
    .get<Movement[]>(urlMovements, {
      params: {
        accountId: accountId,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al obtener la lista de movimientos:", error);
      throw error;
    });
};
