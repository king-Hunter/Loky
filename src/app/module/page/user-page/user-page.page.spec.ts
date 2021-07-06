import { RefreshModule } from './../../../core/component/refresh-page/refresh.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from './../../../core/component/header/header.module';
import { UserPagePage } from './user-page.page';

describe('UserPagePage', () => {
  let component: UserPagePage;
  let fixture: ComponentFixture<UserPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagePage ],
      imports: [IonicModule.forRoot(), HeaderModule, RefreshModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
