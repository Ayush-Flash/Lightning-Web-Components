import { LightningElement } from "lwc";
 
export default class App extends LightningElement {
 name = '';
 containsNumber = false;
 changeHandler = (e) => {
   this.name = e.target.value;
 }
 
 get upperName() {
   const regex = /\d/;
   if(regex.test(this.name)) {
     this.containsNumber = true;
     return '';
   } else {
     this.containsNumber = false;
     return this.name.toUpperCase();
   }
 }
}

