import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';
import { DashboardRoutingModule } from '../../dashboard/dashboard-routing-module';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Login],
      imports: [CommonModule, SharedModule, DashboardRoutingModule],
      providers:  [provideHttpClient(withFetch())]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
