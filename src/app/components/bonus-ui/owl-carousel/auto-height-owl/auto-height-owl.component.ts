import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/bonus-ui/owl-carousel'

@Component({
  selector: 'app-auto-height-owl',
  templateUrl: './auto-height-owl.component.html',
  styleUrls: ['./auto-height-owl.component.scss']
})
export class AutoHeightOwlComponent implements OnInit {


  public owlcarousel14ptions = data.owlcarousel14ptions
  public owlcarousel1 = data.owlcarousel1

  constructor() { }

  ngOnInit(): void {
  }

}
