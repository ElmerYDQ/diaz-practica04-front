import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel} from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  globalOptionList = [
    {name: 'CLIENTES', description: 'clientes', url: 'clientes'},
    {name: 'PRODUCTOS', description: 'productos', url: 'productos'},
    {name: 'TIPO PRODUCTO', description: 'tipo producto', url: 'tipo-producto'}
  ];

  optionList: MenuModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.optionList = this.globalOptionList;
  }

  setOptions() {
    const tempOption = [];
    for (const option of this.globalOptionList) {
      if (option.name.toLocaleLowerCase().indexOf(option.name.toLocaleLowerCase()) > -1) {
        tempOption.push(option);
      }
    }
    this.optionList = tempOption;
    this.router.navigate(['/' + this.optionList[0].url]);
  }

}
