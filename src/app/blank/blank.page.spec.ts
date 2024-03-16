import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlankPage } from './blank.page';

describe('BlankPage', () => {
  let component: BlankPage;
  let fixture: ComponentFixture<BlankPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
