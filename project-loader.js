const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project");

const project = projects[projectKey];

if (!project) {
  console.error("Missing or invalid project in URL.");
} else {
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? "";
  }

  function setImage(id, imageObj) {
    const el = document.getElementById(id);
    if (!el || !imageObj) return;

    el.src = imageObj.src ?? "";
    el.alt = imageObj.alt ?? project.title ?? "";
  }

  setText("project-title", project.title);
  setText("project-sub-title", project.sub_title);
  setText("project-description", project.paragraph);

  setText("project-overview", project.overview);
  setText("project-problem", project.problem);
  setText("project-goal", project.goal);

  setText("project-role", project.role);
  setText("project-deliverables", project.deliverables);
  setText("project-tools", project.tools);

  setText("project-final-subtitle", project.final_subtitle);
  setText("project-final-description", project.final_paragraph);

  setImage("project-main-img", project.main_img);

  const smallImages = project.small_images || [];
  const largeImages = project.large_images || [];

  setImage("img1", smallImages[0]);
  setImage("img2", smallImages[1]);
  setImage("img3", smallImages[2]);
  setImage("img4", largeImages[0]);
  setImage("img5", largeImages[1]);
  setImage("img6", largeImages[2]);
}