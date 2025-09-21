import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRulesComponent } from './agenda-rules.component';

describe('AgendaRulesComponent', () => {
  let component: AgendaRulesComponent;
  let fixture: ComponentFixture<AgendaRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
