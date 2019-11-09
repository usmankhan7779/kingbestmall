import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainDashboardComponent } from './user-main-dashboard.component';

describe('UserMainDashboardComponent', () => {
  let component: UserMainDashboardComponent;
  let fixture: ComponentFixture<UserMainDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
