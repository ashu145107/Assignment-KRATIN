import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodCheckupComponent } from './blood-checkup.component';

describe('BloodCheckupComponent', () => {
  let component: BloodCheckupComponent;
  let fixture: ComponentFixture<BloodCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodCheckupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
