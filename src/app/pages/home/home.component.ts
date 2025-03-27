import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { AppMaterialModule } from '@common/app-material.module';
import { scheduleData } from '../../data';
import { AppSyncfusionModule } from '@common/app-syncfusion.module';

import { DayService, WorkWeekService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule'
import { EventSettingsModel, WeekService, TimelineViewsService, MonthService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'lama-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ScheduleModule, AppMaterialModule, AppSyncfusionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTimepickerModule,
    MatDatepickerModule,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    provideNativeDateAdapter(),
    DayService,
    WeekService,
    WorkWeekService,
    TimelineViewsService,
    MonthService,
    TimelineMonthService,
    AgendaService,
    MonthAgendaService,
  ],
})
export class HomeComponent implements OnInit {
  public today: number = Date.now();

  value: Date = new Date();

  public selectedDate: Date = new Date(2025, 1, 1);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public mainBg = `https://www.kcmo.gov/Home/ShowImage?id=11075`;

  public contents = [
    {
      title: 'Real Estate',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      src: `assets/images/aeroblox2.png`,
      url: `/home`,
    },
    {
      title: 'Education',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      src: `assets/images/aeroblox1.png`,
      url: `/home`,
    },
    {
      title: 'Entertainments',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      src: `assets/images/aeroblox2.png`,
      url: `/home`,
    },
  ];

  ngOnInit(): void {}
}
