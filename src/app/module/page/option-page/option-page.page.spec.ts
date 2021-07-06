import { RefreshModule } from './../../../core/component/refresh-page/refresh.module';
import { HeaderModule } from './../../../core/component/header/header.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OptionPagePage } from './option-page.page';

describe('OptionPagePage', () => {
  let component: OptionPagePage;
  let fixture: ComponentFixture<OptionPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionPagePage ],
      imports: [IonicModule.forRoot(), HeaderModule, RefreshModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
