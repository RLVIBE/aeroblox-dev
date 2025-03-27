import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from '@shared/layouts/header/header.component';
import { FooterComponent } from '@shared/layouts/footer/footer.component';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideNativeDateAdapter(),
  ],
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Aeroblox';
  theme = '';
  constructor() {
    const storedTheme = localStorage.getItem('theme');
    this.theme = 'light';
    if (storedTheme === 'dark') {
      this.theme = 'dark';
      document.body.classList.add('e-dark-mode');
    }
    document.documentElement.classList.add(this.theme);
  }

  ngOnInit() {
    setTimeout(() => {
      [...document.body.getElementsByTagName("div")].forEach(div => {
        const style = window.getComputedStyle(div);

        if (style.position === "fixed" && style.color === "rgb(34, 34, 34)") {
          div.style.transition = "opacity 1s ease-out"; // Add transition
          div.style.opacity = "1"; // Ensure it's visible initially

          setTimeout(() => {
            div.style.opacity = "0"; // Start fade-out animation
            setTimeout(() => {
              div.style.display = "none"; // Hide after animation
            }, 1000); // Match the transition duration
          }, 2000); // Delay before starting fade-out
        }
      });
    }, 1000);
  }

  ngAfterViewInit() {

  }

  toggleTheme() {
    const htmlClass = document.documentElement.classList;
    if (htmlClass.contains('light')) {
      htmlClass.remove('light');
      htmlClass.add('dark');
      document.body.classList.add('e-dark-mode');
    } else {
      htmlClass.remove('dark');
      htmlClass.add('light');
      document.body.classList.remove('e-dark-mode');
    }
    this.theme = htmlClass.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
  }
}
