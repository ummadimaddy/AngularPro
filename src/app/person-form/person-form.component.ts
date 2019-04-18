import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
// import { Gender } from './gender';
// import {Gender} from './gender';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
// export class SelectOverviewExample{
  // gender= new Gender[]=[
  //   {value:'male-0',viewValue:'Male'},
  //   {value:'female-1',viewValue:'Female'}
  // ];
// }
// const array1=['male','Female']
export class PersonFormComponent implements OnInit {
  person = new FormGroup({
    name: new FormControl('',  [
      Validators.required,
    Validators.pattern(`^[a-zA-Z ]{2,30}`)
  ]),
    Gender: new FormControl('', Validators.required),
    Age: new FormControl('', [
      Validators.required,
    Validators.pattern(`[20]{2}`)
  ])
  });
 names;
 gender;
 age;
// const array1:Array=['male','Female']


  constructor() { }

  ngOnInit() {

  }
  onSubmit(){
    const data=this.person.value
     this.names=this.person.value.name
    this.gender=this.person.value.Gender
    this.age=this.person.value.Age
console.log(data);
  }


}
