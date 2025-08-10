import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    component.message = 'This is a test message';
    fixture.detectChanges();
  });

  it('should render the alert container with correct classes and role', () => {
    const alertElement = fixture.debugElement.query(By.css('.ds-alert'));
    expect(alertElement).toBeTruthy();
    expect(alertElement.attributes['role']).toBe('alert');
    expect(alertElement.classes['ds-alert--error']).toBeTrue();
    expect(alertElement.classes['ds-alert-global']).toBeTrue();
  });

  it('should render the alert icon with SVG', () => {
    const iconElement = fixture.debugElement.query(By.css('.ds-alert__icon'));
    expect(iconElement).toBeTruthy();
    const svgElement = iconElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
  });

  it('should render the alert content with title and message', () => {
    const contentElement = fixture.debugElement.query(
      By.css('.ds-alert__content')
    );
    expect(contentElement).toBeTruthy();

    const titleElement = contentElement.query(By.css('.ds-alert__title'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toBe('Erro no servidor');

    const messageElement = contentElement.query(By.css('.ds-alert__message'));
    expect(messageElement).toBeTruthy();
    expect(messageElement.nativeElement.textContent).toBe(
      'This is a test message'
    );
  });

  it('should render the close button with correct attributes and trigger closeAlert()', () => {
    spyOn(component, 'closeAlert');
    const closeButton = fixture.debugElement.query(By.css('.ds-alert__close'));
    expect(closeButton).toBeTruthy();
    expect(closeButton.attributes['aria-label']).toBe('Fechar alerta');

    closeButton.nativeElement.click();
    expect(component.closeAlert).toHaveBeenCalled();
  });

  it('should display the provided message input', () => {
    component.message = 'Custom error message';
    fixture.detectChanges();

    const messageElement = fixture.debugElement.query(
      By.css('.ds-alert__message')
    );
    expect(messageElement.nativeElement.textContent).toBe(
      'Custom error message'
    );
  });

  it('should emit errorChange with false when closeAlert is called', () => {
    spyOn(component.errorChange, 'emit');

    component.closeAlert();

    expect(component.errorChange.emit).toHaveBeenCalledWith(false);
  });
});
