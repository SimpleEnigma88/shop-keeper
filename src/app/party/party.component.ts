import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent implements OnInit {
  curPlayer: any[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }
}
