import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Exp {
  /**
   *
   */
  constructor() {
  }

  id!: number
  location!: string
  date!: string
  title!: string
  description!: string
  technologies!: string
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: any = []
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("../../assets/experiences.json").subscribe(data => {
      this.experiences = data;
    }
    )

    console.log(this.experiences)
  }
}
