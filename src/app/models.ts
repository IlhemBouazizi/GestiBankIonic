import { KeyValue } from "@angular/common";
import { ValueAccessor } from "@ionic/angular/directives/control-value-accessors/value-accessor";

export interface Customer{
    name: string,
    prenom: string,
    tel: string,
    email: string,
    role: string,
    statut: string,
    password: string,
    typeCompte: string,
    agentMatricule: string
}

export interface Agent{
    name: string,
    prenom: string,
    tel: number,
    email: string,
    role: "AGENT",
    matricule: string,
    password: string
}

export interface Administrateur{
    name: string,
    prenom: string,
    tel: string,
    email: string,
    role: "ADMIN",
    matricule: number,
    password: string
}

export interface Currency {
        "success" : true,
        "terms" : "https:\/\/currencylayer.com\/terms",
        "privacy" : "https:\/\/currencylayer.com\/privacy",
        "timestamp" : number,
        "source" : "USD",
        "quotes": {}
}
export interface User{
    name: string,
    prenom: string,
    tel: string,
    email: string,
    role: string,
    password: string,
    
}
export interface Quotes{
    "quotes" : {KeyValue}
}