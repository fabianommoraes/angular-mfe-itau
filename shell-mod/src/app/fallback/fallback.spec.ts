import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallbackComponent } from './fallback.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Mock child component
@Component({
  selector: 'app-notfound',
  standalone: false,
  template: '<div>Mock NotFound Component</div>',
})
class MockNotFoundComponent {}

describe('FallbackComponent', () => {
  let component: FallbackComponent;
  let fixture: ComponentFixture<FallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallbackComponent, MockNotFoundComponent], // Declare the component and mock child
    }).compileComponents();

    fixture = TestBed.createComponent(FallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-notfound component', () => {
    const notFoundElement = fixture.debugElement.query(By.css('app-notfound'));
    expect(notFoundElement).toBeTruthy();
    expect(notFoundElement.nativeElement.textContent).toContain(
      'Mock NotFound Component'
    );
  });
});
