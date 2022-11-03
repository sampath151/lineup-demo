import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchButtonComponent } from './global-search-button.component';
import { TestHelperModule } from '../../../shared/tests/test-helper/test-helper.module';
import { GlobalSearchToggleService } from '../../services/global-search.toggler.service';

describe('GlobalSearchButtonComponent', () => {
  let component: GlobalSearchButtonComponent;
  let fixture: ComponentFixture<GlobalSearchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestHelperModule],
      declarations: [GlobalSearchButtonComponent],
      providers: [GlobalSearchToggleService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
