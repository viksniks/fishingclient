import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCategoryPage } from './detail-category.page';

describe('DetailCategoryPage', () => {
  let component: DetailCategoryPage;
  let fixture: ComponentFixture<DetailCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
