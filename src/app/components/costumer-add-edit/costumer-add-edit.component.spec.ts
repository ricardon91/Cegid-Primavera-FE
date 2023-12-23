import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerAddEditComponent } from './costumer-add-edit.component';

describe('CostumerAddEditComponent', () => {
  let component: CostumerAddEditComponent;
  let fixture: ComponentFixture<CostumerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
