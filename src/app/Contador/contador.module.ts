import { NgModule } from "@angular/core";
import { ContadorComponet } from "./contador/contador.componet";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        ContadorComponet
    ],
    exports : [
        ContadorComponet
    ],
    imports :[
        //CommonModule,
    ],
})

export class ContadorModule{

}