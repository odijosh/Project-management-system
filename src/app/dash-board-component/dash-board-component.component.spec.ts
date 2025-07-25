import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardComponentComponent } from './dash-board-component';

describe('DashBoardComponentComponent', () => {
  let component: DashBoardComponentComponent;
  let fixture: ComponentFixture<DashBoardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
