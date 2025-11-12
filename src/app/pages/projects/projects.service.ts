import { Injectable, signal, Signal } from '@angular/core';
import { Project } from './project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
     getProjects(): Observable<Project[]> {

    const projects: Project[] = [
  {
      name: 'Thomas',
      description:
        'Agentic AI that mimics natural intelligence through persistent memory and various tools.',
      url: 'https://bsky.app/profile/thomasmind54.bsky.social',
    },
      {
      name: 'clammy',
      description:
        'The project is a Insurance Claim Management Platform, powered by Angular on the front end. I wrote the REST Service in Java/Spring and Typescript/Express as an experiment in verbosity. The user can create, resolve and retrieve insurance claims.',
      url: 'https://github.com/hawk0120/clammy',
    },
    {
      name: 'debby',
      description:
        'debby is file based database system. I enjoy the speed and ease of sqlLite, but found myself wanting something even simpler so I built a database system that stores data in a file. It has read, write, and update commands. It loads the entire database into memory when the read command is called. Its a simple solution for small projects.',
      url: 'https://github.com/hawk0120/debby',
    },
    {
      name: 'Weapy',
      description:
        "Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",
      url: 'https://www.bradyhawkins.dev/blog/',
    },
    {
      name: 'Songbird Tribe',
      description:
        'The project is a React based landing page for a musician that I designed and developed.',
      url: 'http://www.songbirdtribe.com',
    },
    {
      name: 'bowmaneconomics.ca',
      description:
        'A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.',
      url: 'https://www.bowmaneconomics.ca',
    },
    {
      name: 'ScottyAuto.ca',
      description:
        "A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",
      url: 'https://www.scottysauto.ca',
    },
    {
      name: 'Personal portfolio site',
      description:
        'Used Angular to create persoanl website that dynamically render markdown files in blog posts',
      url: 'https://www.bradyhawkins.dev',
    },
    {
      name: 'compassionatekenora.ca',
      description:
        'A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.',
      url: 'https://www.compassionatekenora.ca',
    },
    ]
     return of(projects)
     }
}

