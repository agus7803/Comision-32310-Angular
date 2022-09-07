import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule, HttpClientModule,RouterTestingModule],
      
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
