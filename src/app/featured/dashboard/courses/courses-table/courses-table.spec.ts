import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTable } from './courses-table';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared-module';
import { DashboardRoutingModule } from '../../dashboard-routing-module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CoursesTable', () => {
  let component: CoursesTable;
  let fixture: ComponentFixture<CoursesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesTable],
      imports: [CommonModule, SharedModule, DashboardRoutingModule],
      providers:  [
        {
          provide: ActivatedRoute,
          useValue:{
            params: of({}),
            snapshot: {
              params:{
                get: ()=> null,
              },
            },
          },
        },
        provideHttpClient(withFetch()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
