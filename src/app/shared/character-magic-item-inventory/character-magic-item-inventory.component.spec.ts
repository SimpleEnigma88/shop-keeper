import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMagicItemInventoryComponent } from './character-magic-item-inventory.component';

describe('CharacterMagicItemInventoryComponent', () => {
  let component: CharacterMagicItemInventoryComponent;
  let fixture: ComponentFixture<CharacterMagicItemInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMagicItemInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterMagicItemInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
