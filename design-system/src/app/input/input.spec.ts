import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input with the correct attributes', () => {
    component.label = 'Test Label';
    component.placeholder = 'Enter text';
    component.type = 'email';
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement.nativeElement.textContent).toBe('Test Label');

    const inputElement = fixture.debugElement.query(By.css('input'));
    expect(inputElement.attributes['placeholder']).toBe('Enter text');
    expect(inputElement.attributes['type']).toBe('email');
  });

  it('should update the value when the user types', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;

    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.value).toBe('New Value');
  });

  it('should call onChange when the value changes', () => {
    spyOn(component, 'onChange');
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;

    inputElement.value = 'Another Value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.onChange).toHaveBeenCalledWith('Another Value');
  });

  it('should call onTouched when the input is blurred', () => {
    spyOn(component, 'onTouched');
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;

    inputElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should disable the input when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input'));
    expect(inputElement.attributes['disabled']).toBeDefined();
  });
});
