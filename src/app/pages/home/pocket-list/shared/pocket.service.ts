import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pocket } from './pocket';

@Injectable()
export class PocketService {

  private apiUrl = 'pocket';

  constructor(private http: HttpClient) { }

  public getPockets() {
    return this.http.get<Pocket[]>(`${this.apiUrl}`);
  }

  public createPocket(pocket: Pocket) {
    return this.http.post<Pocket>(`${this.apiUrl}`, pocket);
  }

  public renamePocket(pocket: Pocket) {
    return this.http.put<Pocket>(`${this.apiUrl}`, pocket);
  }

  public deletePocket() {
    return this.http.delete(`${this.apiUrl}`);
  }
}
