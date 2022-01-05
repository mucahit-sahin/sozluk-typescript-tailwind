import { Agenda, AgendaAction, AgendaState } from "../../types/agenda";

const defaultState: AgendaState = { agenda:[] as Agenda[],loading:false,error:""}

const agendaReducer = (state:AgendaState=defaultState,action:AgendaAction) => {
    switch (action.type) {
        case "AGENDA_GET_START":
            return { ...state, loading: true, agenda: {} as Agenda[] };
        case "AGENDA_GET_SUCCESS":
            return  {...state,loading:false,agenda:action.payload};
        case "AGENDA_GET_ERROR":
            return { ...state, loading: false, error: "Error" };
        default:
          return state;
      }
}

export default agendaReducer
