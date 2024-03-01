import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tags';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;

  java: boolean = false;
  angular: boolean = false;
  typeScript: boolean = false;
  javaFx: boolean = false;
  javascrpt: boolean = false;
  mySql: boolean = false;

  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Dulan Jayawckrama - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.mySql) {
      filterTags.push(Tag.MYSQL);
    }
    if (this.javaFx) {
      filterTags.push(Tag.JAVAFX);
    }
    if (this.javascrpt) {
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (
      this.java ||
      this.javaFx ||
      this.typeScript ||
      this.angular ||
      this.javascrpt ||
      this.mySql
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilters() {
    this.java = false;
    this.angular = false;
    this.typeScript = false;
    this.javaFx = false;
    this.javascrpt = false;
    this.mySql = false;

    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
