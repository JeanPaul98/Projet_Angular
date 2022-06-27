import { Component, OnInit } from "@angular/core";
import { IHottel } from "./hotel";
@Component({
    selector:'app-hotel-list',
    templateUrl: './hotel-list.component.html', 
    styleUrls : ['./hotel-list.component.css']
})
 
export class HotelListComponent implements OnInit{

    
    public showBadge!: boolean;

    private _hotelFilter = 'mot';

    public filteredHotels : IHottel[] = [];
    
    ngOnInit(): void {
      this.filteredHotels = this.hotels;
      this.hotelFilter = '';
    }

    public title = 'Listes Hotels';

    public hotels: IHottel[] = [
    {
        hotelId:1,
        hotelName:'eda oba',
        description:'Hotels de grand renommer',
        price:200.50,     
        imageUrl:'assets/img/hoteledaoba.jpg'
    },
    {
        hotelId:2,
        hotelName:'la concorde',
        description:'hotels chic de Lomé',
        price:150.00,     
        imageUrl:'assets/img/hotellaconcorde.jpg'
     },{
        hotelId:3,
        hotelName:'onomo',
        description:'Une des etoiles a 4 etoiles de la capitale',
        price:500,     
        imageUrl:'assets/img/Hotelonomo.jpg'
     },{
        hotelId:4,
        hotelName:'ibis',
        description:'Une des etoiles a 3 etoiles de la capitale',
        price:250.50,     
        imageUrl:'assets/img/Hotelsibis.jpg'
     }
    ];

     //fonction pour switche les affichage
     public toggleIsNewBadge(): void{
         this.filteredHotels = this.hotels;
     }

     public get hotelFilter() : string {
         return this._hotelFilter;
     }

     public set hotelFilter(filter: string) {
         this._hotelFilter = filter;

         this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
     }

     private filterHotels(criteria: string): IHottel[] {
         criteria = criteria.toLocaleLowerCase();

         const res = this.hotels.filter(
             (hotel: IHottel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
         );

         return res;
     }
}