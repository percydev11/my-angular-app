import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //template: "<p>Here would go an employee</p>",
  styleUrls: ['./employee.component.css']
  //styles: ["p {background-color: aquamarine;}"]
})
export class EmployeeComponent {

  firstName = 'Vanesa';
  lastName = 'Rodriguez';
  age = 15;
  company = 'PercyTIC';

 /* getAge() {
    return this.age;
  }*/

}
