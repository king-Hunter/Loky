import { HeaderModule } from './../../../core/component/header/header.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryPagePage } from './gallery-page.page';

describe('GalleryPagePage', () => {
  let component: GalleryPagePage;
  let fixture: ComponentFixture<GalleryPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPagePage ],
      imports: [IonicModule.forRoot(), HeaderModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
