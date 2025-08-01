import { TestBed } from '@angular/core/testing';

import { User } from '../models/user.models';
import { UserService } from './user.service';


describe('UserListService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
