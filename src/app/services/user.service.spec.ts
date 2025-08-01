import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { User } from '../models/user.models';
import { UserService } from './user.service';


=======
import { UserService } from './user.service';

>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
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
