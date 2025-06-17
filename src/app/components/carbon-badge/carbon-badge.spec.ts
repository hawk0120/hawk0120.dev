import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonBadge } from './carbon-badge';

describe('CarbonBadge', () => {
  let component: CarbonBadge;
  let fixture: ComponentFixture<CarbonBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
