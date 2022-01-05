import api from "../../api";
import { Agenda, AgendaDispatch } from "../../types/agenda";

export const getAgenda = () => async (dispatch: AgendaDispatch) => {
  dispatch({ type: "AGENDA_GET_START" });
  try {
    const response = await api.get<Agenda[]>(`/agenda`);
    dispatch({ type: "AGENDA_GET_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "AGENDA_GET_ERROR" });
  }
}
