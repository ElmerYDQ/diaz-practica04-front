import { Component } from '@angular/core';

@Component({
    selector: 'app-cabecera',
    templateUrl: './cabecera.component.html'
})
export class CabeceraComponent {
    titulo = 'CJAVA';

    constructor() { }

    ngOnInit(): void {
    }
}
