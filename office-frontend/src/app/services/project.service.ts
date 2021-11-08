import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Project } from '../Project';
import { Projects } from '../mock-projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://localhost:44327/api/project/';

  constructor(private http:HttpClient) { }

  /*getProjects(): Project[]{
    return Projects;
  }*/
  getProjects(): Observable<Project[]>{
    //const projects = of(Projects);
    //return projects;
    let randomThing = this.http.get(this.apiUrl);
    console.log(randomThing);

    return this.http.get<Project[]>(this.apiUrl);
  }

  createProjects(project: Project): Observable<Project>{
    return this.http.post<Project>(this.apiUrl, project);
  }
}
