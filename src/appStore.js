import { EventEmitter } from "events";
import dispatcher from "./dispatcher";

class AppStore extends EventEmitter{
    constructor(){
        super();
        this.fields = {
            name: "Joao",
            nickname: "Castro"
        }
    }

    changeName(){
        this.fields.name = "John"
        this.emit("changeName");
    }

    getAll(){
        return this.fields;
    }

    handleActions(action){
        console.log("AppStore received an action", action);
        console.log("Type : "+action.type)
        switch(action.type){
            case "teste":{
                this.changeName();
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;