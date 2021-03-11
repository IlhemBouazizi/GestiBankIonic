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
    */
    
    
    getUser(email: string) {
      return this.httpClient.get('http://127.0.0.1:85/clients/' + email);

    /*  return new Promise(
        (resolve, reject) => {
          .toPromise().then(
            (data) => {
              resolve(data.valueOf());
            }, (error) => {
              reject(error);
            }
          );
           
        }
      );*/
  
}
updateUser(customer) {
console.log("2")
  return this.httpClient.put('http://127.0.0.1:85/clients/' + customer.email, customer)
}
}
