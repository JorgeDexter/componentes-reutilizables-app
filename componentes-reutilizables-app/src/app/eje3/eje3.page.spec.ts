import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eje3Page } from './eje3.page';

describe('Eje3Page', () => {
  let component: Eje3Page;
  let fixture: ComponentFixture<Eje3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Eje3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
