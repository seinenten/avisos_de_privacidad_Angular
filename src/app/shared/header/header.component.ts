import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showInformationCanine: boolean;

  constructor(private router: Router) {
    this.showInformationCanine = true; // Valor predeterminado al cargar el componente
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar la URL actual y establecer showInformationCanine en consecuencia
        this.showInformationCanine = (event.url === '/avisosprives');
      }
    });
  }

}
