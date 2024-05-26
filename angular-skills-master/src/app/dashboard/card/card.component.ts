import { Component, OnInit, Input } from '@angular/core';
import { CardService } from './card.service'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  likeClass: string = '';

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.updateLikeClass();
  }

  onLike(card: any) {
    this.cardService.incrementLikes(card.id).subscribe(
      updatedCard => {
        card.likes = updatedCard.likes;
        this.updateLikeClass();
      },
      error => {
        console.error('Error incrementing likes:', error);
      }
    );
  }

  onShare(card: any) {
    window.open('https://www.linkedin.com/in/mirelle-manoela-01133b1b0/', '_blank');
  }

  private updateLikeClass() {
    if (this.card.likes >= 10) {
      this.likeClass = 'likes-high';
    } else if (this.card.likes >= 5) {
      this.likeClass = 'likes-medium';
    } else {
      this.likeClass = '';
    }
  }
}
