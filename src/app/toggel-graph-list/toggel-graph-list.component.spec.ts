import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggelGraphListComponent } from './toggel-graph-list.component';

describe('ToggelGraphListComponent', () => {
  let component: ToggelGraphListComponent;
  let fixture: ComponentFixture<ToggelGraphListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggelGraphListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggelGraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
