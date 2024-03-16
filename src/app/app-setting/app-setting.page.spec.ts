import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSettingPage } from './app-setting.page';

describe('AppSettingPage', () => {
  let component: AppSettingPage;
  let fixture: ComponentFixture<AppSettingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
