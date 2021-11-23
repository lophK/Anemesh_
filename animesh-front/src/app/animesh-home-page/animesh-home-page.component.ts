import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-animesh-home-page',
  templateUrl: './animesh-home-page.component.html',
  styleUrls: ['./animesh-home-page.component.css']
})
export class AnimeshHomePageComponent implements OnInit {

  constructor( private router_:Router) { }

  ngOnInit(): void {
  }

}
