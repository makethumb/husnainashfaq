document.addEventListener('DOMContentLoaded', () => {
      // Initialize AOS
      AOS.init();

      // Personal Information
      const personalInfo = {
        name: "HUSNAIN ASHFAQ",
        email: "husnain.ashfaq3939@gmail.com",
        linkedin: "https://www.linkedin.com/in/husnain-ashfaq-158aba216/",
        portfolio: "husnainashfaq.site"
      };

      // Education Rendering
      const educationData = [
        {
          university: "FAST Nuces Islamabad",
          degree: "BS Software Engineering",
          dates: "2022 - Present"
        },
        {
          university: "Punjab Group of Colleges Haroonabad",
          dates: "2020 - 2022"
        },
        {
          university: "Govt High School 185/7-R",
          dates: "2008 - 2020"
        }
      ];

      const educationList = document.getElementById('education-list');
      educationData.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.classList.add('education-item');
        eduItem.innerHTML = `
          <h3>${edu.university}</h3>
          ${edu.degree ? `<p>${edu.degree}</p>` : ''}
          <p class="dates">${edu.dates}</p>
        `;
        educationList.appendChild(eduItem);
      });

      // Technical Skills Rendering
      const skillsData = [
        "Next.js", "React js", "Node js", 
        "Tailwind CSS", "Mongodb", "SQL", "C++"
      ];

      const skillsList = document.getElementById('skills-list');
      skillsData.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.classList.add('tech-tag');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
      });

      // Projects Rendering
      const projectsData = [
        {
          name: "Laser-Cut Focal",
          technologies: ["React", "shadcn", "Tailwind CSS", "Firebase", "Webflowmax", "Xero", "Stripe"],
          description: [
            "Laser-Cut Web Application build for Focal",
            "Client portal with quoting, job history, part library, and payment",
            "Admin dashboards for job management, cut schedules, and inventory alerts.",
            "Integrated Stripe and Xero for seamless payments and automated tracking."
          ]
        },
        {
          name: "iWaleWah-ecommerce",
          technologies: ["React.js", "Tailwindcss", "Appwrite", "Opayo"],
          description: [
            "Wholesale account management with product catalogs, order processing, and sales tracking.",
            "Graphs and data analytics for comprehensive store performance insights.",
            "Contacts management and dynamic content for targeted customer engagement."
          ]
        },
        {
          name: "Talent-Finder",
          technologies: ["React.js", "Tailwindcss", "Appwrite", "Stripe"],
          description: [
            "Company job posting with dashboards for managing listings and analytics.",
            "Candidate portal to view and apply for jobs with Stripe-enabled payments.",
            "Advanced filtering options for streamlined job searches and applications."
          ]
        }
      ];

      const projectsList = document.getElementById('projects-list');
      projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
          <h3>${project.name}</h3>
          <div class="project-technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <ul>
            ${project.description.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        `;
        projectsList.appendChild(projectCard);
      });
    });