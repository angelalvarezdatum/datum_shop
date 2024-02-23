import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-two',
  templateUrl: './image-two.component.html',
  styleUrls: ['./image-two.component.scss']
})
export class ImageTwoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
