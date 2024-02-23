import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  $index: number = 0
  date = new Array()
  year = new Array()
  constructor() { 
    for(let i =1;i <= 31; i++){
      this.date.push(i)   
    }

    for(let i = 1985; i <= 2019; i++){
      this.year.push(i)
    }

  }


  ngOnInit(): void {
  }

}
