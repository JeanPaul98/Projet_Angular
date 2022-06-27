import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-star-rating',
    templateUrl:'./star-rating.component.html',
    styleUrls:['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

    public startWidth: number;

    public rating: number = 2;

    ngOnChanges(changes: SimpleChanges): void {
        this.startWidth = this.rating * 125 / 5;
    }

}