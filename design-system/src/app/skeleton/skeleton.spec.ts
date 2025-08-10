import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render with default styles', () => {
    const skeletonElement = fixture.debugElement.query(
      By.css('div')
    ).nativeElement;

    expect(skeletonElement.style.width).toBe('100%');
    expect(skeletonElement.style.height).toBe('16px');
    expect(skeletonElement.style.borderRadius).toBe('4px');
    expect(skeletonElement.style.marginBottom).toBe('8px');
  });

  it('should update styles when inputs are changed', () => {
    component.width = '50%';
    component.height = '20px';
    component.borderRadius = '8px';
    component.marginBottom = '12px';
    fixture.detectChanges();

    const skeletonElement = fixture.debugElement.query(
      By.css('div')
    ).nativeElement;

    expect(skeletonElement.style.width).toBe('50%');
    expect(skeletonElement.style.height).toBe('20px');
    expect(skeletonElement.style.borderRadius).toBe('8px');
    expect(skeletonElement.style.marginBottom).toBe('12px');
  });
});
