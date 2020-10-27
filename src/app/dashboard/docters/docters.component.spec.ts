import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctersComponent } from './docters.component';

describe('DoctersComponent', () => {
  let component: DoctersComponent;
  let fixture: ComponentFixture<DoctersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
