import dispatcher from "./dispatcher";

export function appTeste(){
     dispatcher.dispatch({
        type: "teste",
     });
}