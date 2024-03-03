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
  nodejs: boolean = false;
  expressjs: boolean = false;
  javascrpt: boolean = false;
  mySql: boolean = false;
  javaFx: boolean = false;

  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Dulan Jayawckrama - Projects');
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
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.mySql) {
      filterTags.push(Tag.MYSQL);
    }
    if (this.javaFx) {
      filterTags.push(Tag.JAVAFX);
    }
    if (this.expressjs) {
      filterTags.push(Tag.EXPRESSJS);
    }

    if (
      this.java ||
      this.javaFx ||
      this.nodejs ||
      this.angular ||
      this.expressjs ||
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
    this.nodejs = false;
    this.javaFx = false;
    this.expressjs = false;
    this.mySql = false;

    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
