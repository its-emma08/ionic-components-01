import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackButtonPage } from './back-button.page';

describe('BackButtonPage', () => {
  let component: BackButtonPage;
  let fixture: ComponentFixture<BackButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
