import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models';
import { Agent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private dataBase = "http://127.0.0.1:85/clients/";
  private dataBase2 = "http://127.0.0.1:85/agent/";

  //customers/add

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(){
    return this.httpClient.get(this.dataBase + 'list');
  }

  getValidatedCustomers(){
    return this.httpClient.get(this.dataBase + 'waiting/list');
  }

  getWaitingCustomers(){
    return this.httpClient.get(this.dataBase + 'validated/list');
  }

  postCustomer(customer: Customer){
    return this.httpClient.post(this.dataBase + "add", customer);
  }

  putCustomer(customer){
    return this.httpClient.post(this.dataBase + 'update/' + ['email'], customer);
  }

  deleteCustomer(email: String){
    return this.httpClient.post(this.dataBase + 'delete/' + ['email'], email);
  }
   //agent/add
  postAgent(agent: Agent){
    return this.httpClient.post(this.dataBase2 + "add", agent);
  }
    //agent/list
    getAgents(){
      return this.httpClient.get(this.dataBase2 + 'list');
    }
    getClientsAttentes(){
      return this.httpClient.get(this.dataBase + 'list/attente');
    }
    /*supprimer un agent
    deleteAgent(email: String){
      return this.httpClient.post(this.dataBase + 'delete/' + ['email'], email);
    }
    putAgent(agent: Agent){
      return this.httpClient.post(this.dataBase2 + 'update/' + ['email'], agent);
    }*/
}
