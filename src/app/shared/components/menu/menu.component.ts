import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  pages = [
    { title: 'Scan', url: '/scan', icon: 'scan-outline' },
    { title: 'Historial', url: '/historial', icon: 'time-outline' },
  ]
  constructor() { }

  ngOnInit() {}

}
