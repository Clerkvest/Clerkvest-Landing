import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLoginComponent } from './company-login.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CompanyLoginComponent', () => {
  let component: CompanyLoginComponent;
  let fixture: ComponentFixture<CompanyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLoginComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
