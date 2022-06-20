import { Component, OnInit } from '@angular/core';
// import ProjectJson from '../../assets/p2.json';
import { HttpClient } from '@angular/common/http';

export class Projects {
  constructor() {

  }
  id!: number;
  title!: string;
  description!: string;
  github!: string;
  link!: string;
  name!: string;
  path!: string;
  techstack!: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})

export class WorksComponent implements OnInit {
  projects: any = [];
  // pj = JSON.parse(ProjectJson);

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get("../../assets/works.json").subscribe(data => {
      this.projects = data;
      this.projects.sort((a: Projects, b: Projects) => (a["id"] > b["id"] ? 1 : -1))
    });

  }
}