import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { UserService } from '../services/userService';
import { Component, Input } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'ds-typography',
  standalone: false,
  template: '<div></div>',
})
class MockTypographyComponent {
  @Input() text: string = '';
}

@Component({
  selector: 'ds-button',
  standalone: false,
  template: '<button></button>',
})
class MockButtonComponent {}

@Component({
  selector: 'app-notfound',
  standalone: false,
  template: '<div></div>',
})
class MockAppNotFoundComponent {}

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['getUser']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      //@ts-ignore
      queryParamMap: of({
        get: (key: string) => {
          if (key === 'name') return 'John Doe';
          if (key === 'email') return 'john.doe@example.com';
          if (key === 'choice') return 'Option A';
          return null;
        },
      }),
      snapshot: {
        //@ts-ignore

        paramMap: {
          get: (key: string) => (key === 'userId' ? '123' : null),
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [
        SuccessComponent,
        MockTypographyComponent,
        MockButtonComponent,
        TableComponent,
        MockAppNotFoundComponent,
      ],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load data from query parameters', () => {
    expect(component.name).toBe('John Doe');
    expect(component.email).toBe('john.doe@example.com');
    expect(component.choice).toBe('Option A');
    expect(component.loading).toBeFalse();
  });

  it('should load data from the service if query parameters are missing', () => {
    // Simulate missing query parameters
    //@ts-ignore
    mockActivatedRoute.queryParamMap = of({
      get: () => null,
    });
    mockUserService.getUser.and.returnValue(
      of({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        choice: 'Option B',
      })
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(mockUserService.getUser).toHaveBeenCalledWith('123');
    expect(component.name).toBe('Jane Doe');
    expect(component.email).toBe('jane.doe@example.com');
    expect(component.choice).toBe('Option B');
    expect(component.loading).toBeFalse();
  });

  it('should handle errors from the service', () => {
    // Simulate missing query parameters and a service error
    //@ts-ignore

    mockActivatedRoute.queryParamMap = of({
      get: () => null,
    });
    mockUserService.getUser.and.returnValue(
      throwError(() => new Error('Service error'))
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(mockUserService.getUser).toHaveBeenCalledWith('123');
    expect(component.error).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('should emit the continue event when triggered', () => {
    spyOn(component.continue, 'emit');

    component.continue.emit();
    expect(component.continue.emit).toHaveBeenCalled();
  });
});
