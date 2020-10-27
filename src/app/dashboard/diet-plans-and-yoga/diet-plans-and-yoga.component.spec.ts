import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietPlansAndYogaComponent } from './diet-plans-and-yoga.component';

describe('DietPlansAndYogaComponent', () => {
  let component: DietPlansAndYogaComponent;
  let fixture: ComponentFixture<DietPlansAndYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietPlansAndYogaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietPlansAndYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
