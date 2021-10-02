import { LightningElement, api } from "lwc";
export default class Child extends LightningElement {
 lowername = '';
 @api
 get name() {
   this.name = '';
 }
 set name(value) {
   this.lowername = value.toLowerCase();
 }
}
