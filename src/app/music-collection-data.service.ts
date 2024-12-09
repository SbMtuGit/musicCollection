import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Album } from './home-list/home-list.component'; 

@Injectable({
  providedIn: 'root',
})
export class MusicCollectionDataService {
  private apiBaseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  // Fetch albums from API
  public async getAlbums(): Promise<Album[]> {
    const url: string = `${this.apiBaseUrl}/Discover`; 
    try {
      const response = await firstValueFrom(this.http.get<Album[]>(url)); 
      console.log('API Response:', response); // Debug log
      return response;
    } catch (error) {
      this.handle(error); // Call the error handler
      throw error; // Rethrow the error after handling
    }
  }

  // Error handler method
  private handle(error: any): void {
    console.error('An error occurred:', error);
  }
}

