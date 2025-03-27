import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ab-header',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatMenuModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public logo = `https://aeroblox.io/wp-content/uploads/2024/11/AB_logo_web_blue-1.png`;
  public mobileMenuOpen = false;
  @Input() theme: string = '';
  @Output() toggle = new EventEmitter();

  solutions = [
    { icon: 'gavel', title: 'Permitting', description: 'Manage permits and inspections' },
    { icon: 'assignment', title: 'Licensing', description: 'Licenses, registrations, and certifications' },
    { icon: 'edit', title: 'Planning', description: 'Planning, projects, and development review' },
    { icon: 'security', title: 'Code Enforcement', description: 'Track cases from complaint to resolution' },
    { icon: 'work', title: 'Work Orders & Assets', description: 'Track tasks, actions, and property' },
    { icon: 'integration_instructions', title: 'Integrations', description: 'Connect with third-party tools' }
  ];

  toggleTheme() {
    this.toggle.emit(true);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
