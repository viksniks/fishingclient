import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GotoTopComponent } from './goto-top.component';

describe('GotoTopComponent', () => {
  let component: GotoTopComponent;
  let fixture: ComponentFixture<GotoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoTopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GotoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
