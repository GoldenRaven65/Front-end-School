const projects = [
    {
      title: "HTML & CSS Portfolio",
      description: "A personal website showcasing my skills and education."
    },
    {
      title: "JavaScript Open Dag Project",
      description: "Interactive experience for Open Day using DOM manipulation."
    },
    {
      title: "PHP Twitter Clone",
      description: "A mini Twitter app built with PHP and MySQL."
    }
  ];
  
  let currentProject = 0;
  
  function changeProject(direction) {
    currentProject = (currentProject + direction + projects.length) % projects.length;
    const project = projects[currentProject];
    document.getElementById("project-content").innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.description}</p>
    `;
  }
  