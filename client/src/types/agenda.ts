import { ThunkDispatch } from "redux-thunk";

export interface AgendaState {
    agenda: Agenda[];
    loading: boolean;
    error: string;
}

export interface Agenda {
    id: string;
    title: string;
    slug: string;
    changedAt: Date;
    todayCount: number;
}

// actions

interface AGENDA_GET_START {
    type: "AGENDA_GET_START";
}
  
interface AGENDA_GET_SUCCESS {
    type: "AGENDA_GET_SUCCESS";
    payload: Agenda[];
}
  
interface AGENDA_GET_ERROR {
    type: "AGENDA_GET_ERROR";
}

export type AgendaAction = AGENDA_GET_START | AGENDA_GET_SUCCESS | AGENDA_GET_ERROR;

export type AgendaDispatch = ThunkDispatch<
    AgendaState,
  void,
  AgendaAction
>;