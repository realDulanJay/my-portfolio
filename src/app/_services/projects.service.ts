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
      name: 'Cipher Message - Android App',
      summary: 'Encrypt & Decrypt Messages',
      description:
        'Encrypt your messages with confidence using Cipher Message, the ultimate text encryption app! Safeguard your sensitive information with default or custom encryption keys. You have the option to add your screen lock as the app lock for added security. Keep track of your encrypted texts with the history function, or decline that option for more privacy. You can change encryption keys and delete encrypted message history at anytime.',
      projectLink: 'https://github.com/realDulanJay',
      tags: [Tag.JAVA],
      pictures: [
        '../../assets/project-images/Screenshot 2024-02-25 134206.png',
        '../../assets/project-images/project_id_1_pic1.png',
        '../../assets/project-images/Screenshot 2024-02-25 134724.png',
        '../../assets/project-images/Screenshot 2024-02-25 140012.png',
      ],
    },
    {
      id: 1,
      name: 'Cafeteria Management System',
      summary: 'Full-stack Single Page Application (SPA) Project',
      description:
        'A full-stack Single Page Application (SPA) Project with key features including secure authentication, an intuitive dashboard for streamlined management, user-friendly password updates, efficient category and product control, order processing with downloadable PDF bills, and simplified billing history management. User administration capabilities empower admins to activate/deactivate users as needed. This initiative signifies a commitment to enhancing operational processes and improving overall system usability.',
      projectLink:
        'https://github.com/realDulanJay/Cafeteria-Management-System',
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.EXPRESSJS, Tag.MYSQL],
      pictures: [
        '../../assets/project-images/project_id_1/project_id_1_pic1.png',
        '../../assets/project-images/project_id_1/project_id_1_pic2.png',
        '../../assets/project-images/project_id_1/project_id_1_pic3.png',
        '../../assets/project-images/project_id_1/project_id_1_pic4.png',
        '../../assets/project-images/project_id_1/project_id_1_pic5.png',
        '../../assets/project-images/project_id_1/project_id_1_pic6.png',
        '../../assets/project-images/project_id_1/project_id_1_pic7.png',
        '../../assets/project-images/project_id_1/project_id_1_pic8.png',
      ],
    },
    {
      id: 2,
      name: 'Retail Management System',
      summary: 'Standalone Java Application',
      description:
        'Retail Management System, a robust standalone Java application using Java, JavaFX, and MySQL. Adhering to the Layered Architecture, the system features secure login/sign-up pages, an intuitive dashboard for customer and product management, and facilitates seamless CRUD operations. Notably, it integrates a loyalty card system for enhanced customer engagement and supports batch addition of products with unique QR codes. The application streamlines order placement by allowing input of customer details and product QR codes',
      projectLink:
        'https://github.com/realDulanJay/ShopMaid-standalone-application',
      tags: [Tag.JAVA, Tag.JAVAFX, Tag.MYSQL],
      pictures: [
        '../../assets/project-images/project_id_2/project_id_2_pic1.png',
        '../../assets/project-images/project_id_2/project_id_2_pic2.png',
        '../../assets/project-images/project_id_2/project_id_2_pic3.png',
        '../../assets/project-images/project_id_2/project_id_2_pic4.png',
        '../../assets/project-images/project_id_2/project_id_2_pic5.png',
        '../../assets/project-images/project_id_2/project_id_2_pic6.png',
      ],
    },
    {
      id: 3,
      name: 'Portfolio Website',
      summary: 'My portfolio as a Single Page Application (SPA)',
      description:
        'Developed my portfolio website as a sleek Single Page Application (SPA) to showcase my projects, resume, and provide a direct point of contact. This site offers a seamless user experience with sections dedicated to displaying my various projects, enabling easy navigation through my resume, and providing a streamlined contact process. The website reflects my commitment to simplicity and efficiency, allowing visitors to download my resume directly.',
      projectLink: 'https://github.com/realDulanJay/my-portfolio',
      tags: [Tag.ANGULAR],
      pictures: [
        '../../assets/project-images/project_id_3/project_id_3_pic1.png',
        '../../assets/project-images/project_id_3/project_id_3_pic2.png',
        '../../assets/project-images/project_id_3/project_id_3_pic3.png',
        '../../assets/project-images/project_id_3/project_id_3_pic4.png',
        '../../assets/project-images/project_id_3/project_id_3_pic5.png',
      ],
    },
    // {
    //   id: 4,
    //   name: 'Rust Angular App',
    //   summary: 'Test Description',
    //   description:
    //     'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    //   projectLink: '//www.github.com',
    //   tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    //   pictures: [
    //     '../../assets/project-images/image1.png',
    //     '../../assets/project-images/image2.png',
    //     '../../assets/project-images/image3.png',
    //   ],
    // },
    // {
    //   id: 5,
    //   name: 'Mine Angular App',
    //   summary: 'Test Description',
    //   description:
    //     'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    //   projectLink: '//www.github.com',
    //   tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT],
    //   pictures: [
    //     '../../assets/project-images/image1.png',
    //     '../../assets/project-images/image2.png',
    //     '../../assets/project-images/image3.png',
    //   ],
    // },
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
