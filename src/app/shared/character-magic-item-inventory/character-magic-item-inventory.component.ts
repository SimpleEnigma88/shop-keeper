import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface MagicItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  rarity: string;
  requires_attunement: boolean;
  showTooltip?: boolean;
  tooltipTimeout?: any;
}


@Component({
  selector: 'app-character-magic-item-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-magic-item-inventory.component.html',
  styleUrl: './character-magic-item-inventory.component.css'
})
export class CharacterMagicItemInventoryComponent implements OnInit {
  charMagicItems: MagicItem[] = [];
  newMagicItem: string = '';
  showTooltip = false;

  constructor(private inventoryService: InventoryService, private http: HttpClient) { }

  addMagicItem(characterId: string, magicItemId: string) {
    this.inventoryService.addCharacterMagicItem(characterId, magicItemId).subscribe(
      (value: any) => {
        const newItem = { ...value, showTooltip: false };
        this.charMagicItems.push(newItem);
      },
      error => console.error(error)
    );
  }

  deleteMagicItem(charID = '2', item: MagicItem) {
    this.inventoryService.deleteCharacterMagicItem(charID, item.id).subscribe(
      () => {
        const index = this.charMagicItems.indexOf(item);
        if (index > -1) {
          this.charMagicItems.splice(index, 1);
        }
      },
      error => console.error(error)
    );
  }

  addRandomMagicItem() {
    this.http.get('/api/magic-items').subscribe(
      (value: any) => {
        const magicItems = value as MagicItem[];
        const randomIndex = Math.floor(Math.random() * magicItems.length);
        const randomItem = magicItems[randomIndex];
        this.addMagicItem('2', randomItem.id);
      },
      error => console.error(error)
    );
  }

  showTooltipWithDelay(item: MagicItem) {
    item.tooltipTimeout = setTimeout(() => {
      item.showTooltip = true;
    }, 350);  // delay in milliseconds
  }

  hideTooltipImmediately(item: MagicItem) {
    clearTimeout(item.tooltipTimeout);
    item.showTooltip = false;
  }

  ngOnInit() {
    this.inventoryService.getCharacterMagicItems('2').subscribe(
      (value: any) => {
        this.charMagicItems = value.map((item: any) => {
          return {
            ...item,
            showTooltip: false
          };
        });
      },
      error => console.error(error)
    );
  }
}
