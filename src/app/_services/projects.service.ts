import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Angular App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
    {
      id: 1,
      name: 'Java App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.JAVA, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
    {
      id: 2,
      name: 'React Angular App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
    {
      id: 3,
      name: 'JS Angular App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
    {
      id: 4,
      name: 'Rust Angular App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
    {
      id: 5,
      name: 'Mine Angular App',
      summary: 'Test Description',
      description:
        'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      projectLink: '//www.github.com',
      tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT],
      pictures: [
        '../../assets/project-images/image1.png',
        '../../assets/project-images/image2.png',
        '../../assets/project-images/image3.png',
      ],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There are no projects that matches the id: ' + id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTags) {
        if (project.tags.includes(filterTags) === false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
