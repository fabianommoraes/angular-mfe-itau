import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radiobutton.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioButtonComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of radio buttons', () => {
    component.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    fixture.detectChanges();

    const radioButtons = fixture.debugElement.queryAll(
      By.css('input[type="radio"]')
    );
    expect(radioButtons.length).toBe(2);
    expect(radioButtons[0].nativeElement.value).toBe('1');
    expect(radioButtons[1].nativeElement.value).toBe('2');
  });

  it('should update the value and call onChange when a radio button is selected', () => {
    spyOn(component, 'onChange');
    component.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    fixture.detectChanges();

    const radioButton = fixture.debugElement.query(
      By.css('input[value="1"]')
    ).nativeElement;
    radioButton.click();
    fixture.detectChanges();

    expect(component.value).toBe('1');
    expect(component.onChange).toHaveBeenCalledWith('1');
  });

  it('should call onTouched when a radio button is selected', () => {
    spyOn(component, 'onTouched');
    component.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    fixture.detectChanges();

    const radioButton = fixture.debugElement.query(
      By.css('input[value="1"]')
    ).nativeElement;
    radioButton.click();
    fixture.detectChanges();

    expect(component.onTouched).toHaveBeenCalled();
  });
});
