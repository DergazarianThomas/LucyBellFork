import { Component, HostListener, ViewChild } from '@angular/core';
import { navBarComponent } from "../navBar/navBar.component";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavBarResponsiveComponent } from "../nav-bar-responsive/nav-bar-responsive.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [navBarComponent, CommonModule, NavBarResponsiveComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  isLargeScreen: boolean = true;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize(); 
  }

  checkScreenSize(): void {
    this.isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
  }

  toggleChildSidebar(): void {
    this.sidebar.toggleSidebar();
  }
}
