import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPermisosComponent } from './config-permisos.component';

describe('ConfigPermisosComponent', () => {
  let component: ConfigPermisosComponent;
  let fixture: ComponentFixture<ConfigPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigPermisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
