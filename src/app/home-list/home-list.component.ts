import { Component, OnInit } from "@angular/core";
import { MusicCollectionDataService } from '../music-collection-data.service';


export class Album {
  AlbumsID!: number; 
  cover!: string;    
  title!: string;  
  artist!: string;   
  year!: number;     
  genre!: string;    
  rating!: number; 
}
@Component({
  selector: 'app-home-list',
  standalone: false,
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [MusicCollectionDataService]
})
export class HomeListComponent implements OnInit {
  albums: Album[] = [];
 
 /* albums: Album[] = [
   {
      ID: 1,
      cover: 'cover1.jpg',
      title: 'Album 1',
      artist: 'Artist 1',
      year: 2020,
      genre: 'Rock',
      Description: 'Description of Album 1'
    },
    {
      ID: 2,
      cover: 'cover2.jpg',
      title: 'Album 2',
      artist: 'Artist 2',
      year: 2021,
      genre: 'Pop',
      Description: 'Description of Album 2'
    }
  ];*/

  constructor(private musicCollectionDataService: MusicCollectionDataService) {}

  // Fetch albums using subscribe() for Observables
  public getAlbums(): void {
    this.musicCollectionDataService.getAlbums().then(foundAlbum =>{
      this.albums= foundAlbum;
    });
  }

  ngOnInit(): void {
    this.getAlbums(); 
  }
}


