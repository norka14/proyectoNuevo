import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses';
import { CoursesTable } from './courses-table/courses-table';
import { CoursesForm } from './courses-form/courses-form';


@NgModule({
  declarations: [
    Courses,
    CoursesTable,
    CoursesForm
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
