import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = 'images/next.png';
  @Input() type: string = 'button';
  @Input() content: string = '';

  get isButton(): boolean {
    return this.type === 'button';
  }

  get isInfoButton(): boolean {
    return this.type === 'info';
  }

  get hasContent(): boolean {
    return this.content.trim().length > 0;
  }

  ngOnInit(): void {
    console.log('=== IconButton Debug ===');
    console.log('Type recibido:', this.type);
    console.log('Icon recibido:', this.icon);
    console.log('isInfoButton:', this.isInfoButton);
    console.log('isButton:', this.isButton);
    console.log('========================');
  }
}
