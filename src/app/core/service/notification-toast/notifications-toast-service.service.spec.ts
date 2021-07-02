import { TestBed } from '@angular/core/testing';

import { ToastNotificationsService } from './notifications-toast-service.service';

describe('ToastNotificationsService', () => {
  let service: ToastNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
