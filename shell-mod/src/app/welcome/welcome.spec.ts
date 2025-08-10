import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ds-typography',
  standalone: false,
  template: '<div></div>',
})
class MockTypographyComponent {}

@Component({
  selector: 'ds-button',
  standalone: false,
  template: '<button></button>',
})
class MockButtonComponent {}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        MockTypographyComponent,
        MockButtonComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the smiley face', () => {
    const smileElement = fixture.debugElement.query(
      By.css('.ds-welcome-smile')
    );
    expect(smileElement).toBeTruthy();
    expect(smileElement.nativeElement.textContent).toBe(':)');
  });

  it('should render the ds-typography components', () => {
    const typographyElements = fixture.debugElement.queryAll(
      By.css('ds-typography')
    );
    expect(typographyElements.length).toBe(3); // Ensure all 3 ds-typography components are rendered
  });

  it('should render the ds-button component', () => {
    const buttonElement = fixture.debugElement.query(By.css('ds-button'));
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.attributes['text']).toBe('Cadastrar');
    expect(buttonElement.attributes['href']).toBe('/cadastro');
    expect(buttonElement.attributes['tag']).toBe('a');
    expect(buttonElement.attributes['size']).toBe('large');
    expect(buttonElement.attributes['variant']).toBe('special');
  });
});
