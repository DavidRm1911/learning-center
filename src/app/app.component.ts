import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, RouterLink, MatAnchor, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning';
  options = [
    {path: '/home', title: 'Home'},
    {path:'/ourmission', title: 'Our Mission'},
    {path: '/about', title: 'About'}

  ]

}
