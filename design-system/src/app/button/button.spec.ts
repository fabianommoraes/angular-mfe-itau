import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { provideRouter } from '@angular/router';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render as a button tag by default', () => {
    component.tag = 'button';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.attributes['type']).toBe('button');
  });

  it('should apply the disabled attribute when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['disabled']).toBeDefined();
  });

  it('should apply the correct classes based on variant and size', () => {
    component.variant = 'secondary';
    component.size = 'large';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button, a'));
    expect(buttonElement.classes['secondary']).toBeTrue();
    expect(buttonElement.classes['large']).toBeTrue();
  });
});
