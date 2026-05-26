const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category");

const category = categories[categoryKey];

if (!category) {
  console.error("Missing or invalid category in URL.");
} else {
  document.getElementById("category-title").textContent = category.title;
  document.getElementById("category-subtitle").textContent = category.sub_title;
  document.getElementById("category-description").textContent = category.description;

  const projectContainer = document.getElementById("project-container");

  category.projects.forEach((projectName, index) => {
    const project = projects[projectName];

    if (!project) {
      console.warn(`Project not found: ${projectName}`);
      return;
    }

    const isCaseStudy = project.caseStudyCategories?.includes(categoryKey);

    const pageUrl = isCaseStudy
      ? `case-study.html?project=${encodeURIComponent(projectName)}&category=${encodeURIComponent(categoryKey)}`
      : `project.html?project=${encodeURIComponent(projectName)}&category=${encodeURIComponent(categoryKey)}`;

    const buttonText = isCaseStudy ? "View Case Study →" : "View Project →";
    const categoryLabel = category.title.replace(" Design", "").replace("& Layout", "");
    const projectTypeLabel = isCaseStudy ? "Case Study" : "Project";
    const markerText = `${categoryLabel} | ${projectTypeLabel}`;
    const textBlock = `
      <div class="cat-page-small mask-reveal">
        <div>
          <h2>${project.title}</h2>
          <h3>${project.sub_title}</h3>
          <p>${project.paragraph}</p>
        </div>
        <div class="ux-ui-btn">
          <a href="${pageUrl}">
            <button class="view-more-cat">${buttonText}</button>
          </a>
        </div>
      </div>
    `;

    const imageBlock = `
    <div class="cat-page-large mask-reveal project-marker" data-marker="${markerText}">
      <a href="${pageUrl}">
        <img src="${project.main_img.src}" alt="${project.main_img.alt || project.title}">
      </a>
    </div>
  `;

    const layoutClass =
      index % 2 === 0 ? "cat-page-small-large" : "cat-page-large-small";

    const content =
      index % 2 === 0
        ? `${textBlock}${imageBlock}`
        : `${imageBlock}${textBlock}`;

    projectContainer.insertAdjacentHTML(
      "beforeend",
      `
      <section class="cat-page reveal reveal-up">
        <div class="${layoutClass}">
          ${content}
        </div>
      </section>
      `
    );
  });
}