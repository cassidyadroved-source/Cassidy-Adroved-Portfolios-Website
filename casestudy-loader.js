const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project");
const categoryKey = params.get("category");

const project = projects[projectKey];
const category = categories[categoryKey];

if (!project || !category) {
  console.error("Missing or invalid project/category in URL.");
}

const sectionKeyMap = {
  ux: ["research", "personas", "userflows", "wireframes", "designsolution", "feature"],
  branding: ["research", "audience", "color_scheme", "logo", "typography", "supporting_elements"],
  front_end: ["research_front", "planning", "semantic_layout", "wireframes", "consistency", "responsive_design"]
};

const sectionKeys = sectionKeyMap[categoryKey] || [];

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

function setImage(id, imageObj) {
  const el = document.getElementById(id);
  if (!el || !imageObj) return;

  if (typeof imageObj === "string") {
    el.src = imageObj;
    el.alt = "";
    return;
  }

  el.src = imageObj.src ?? imageObj.img ?? "";
  el.alt = imageObj.alt ?? "";
}

function getSectionItem(sectionKey) {
  const section = project?.[sectionKey];

  if (!section) return null;

  if (typeof section === "string") {
    return {
      text: section,
      img: project.main_img?.src || "",
      alt: project.main_img?.alt || ""
    };
  }

  if (Array.isArray(section)) {
    return section[0] || null;
  }

  return null;
}

/* top content */
setText("project-title", project?.title);
setText("project-sub-title", project?.sub_title);
setText("project-description", project?.paragraph);
setText("project-overview", project?.overview);
setText("project-problem", project?.problem);
setText("project-goal", project?.goal);
setText("project-role", project?.role);
setText("project-deliverables", project?.deliverables);
setText("project-tools", project?.tools);

setText("project-final-subtitle", project?.final_subtitle);
setText("project-final-description", project?.final_paragraph);

setImage("project-main-img", project?.main_img);

/* section headers */
setText("project-header1", category.sectionTitles?.[0] || "");
setText("project-header2", category.sectionTitles?.[1] || "");
setText("project-header3", category.sectionTitles?.[2] || "");
setText("project-header4", category.sectionTitles?.[3] || "");
setText("project-header5", category.sectionTitles?.[4] || "");
setText("project-header6", category.sectionTitles?.[5] || "");

/* nav */
setText("nav1", category.sectionTitles?.[0] || "");
setText("nav2", category.sectionTitles?.[1] || "");
setText("nav3", category.sectionTitles?.[2] || "");
setText("nav4", category.sectionTitles?.[3] || "");
setText("nav5", category.sectionTitles?.[4] || "");
setText("nav6", category.sectionTitles?.[5] || "");

/* section data */
const section1 = getSectionItem(sectionKeys[0]);
const section2 = getSectionItem(sectionKeys[1]);
const section3 = getSectionItem(sectionKeys[2]);
const section4 = getSectionItem(sectionKeys[3]);
const section5 = getSectionItem(sectionKeys[4]);
const section6 = getSectionItem(sectionKeys[5]);

setText("project-section1", section1?.text);
setText("project-section2", section2?.text);
setText("project-section3", section3?.text);
setText("project-section4", section4?.text);
setText("project-section5", section5?.text);
setText("project-section6", section6?.text);

setImage("section1-img", {
  src: section1?.img,
  alt: section1?.alt
});

setImage("section2-img", {
  src: section2?.img,
  alt: section2?.alt
});

setImage("section3-img", {
  src: section3?.img,
  alt: section3?.alt
});

setImage("section4-img", {
  src: section4?.img,
  alt: section4?.alt
});

setImage("section5-img", {
  src: section5?.img,
  alt: section5?.alt
});

setImage("section6-img", {
  src: section6?.img,
  alt: section6?.alt
});

/* final gallery */
const smallImages = project?.small_images || [];
const largeImages = project?.large_images || [];

setImage("img1", smallImages[0]);
setImage("img2", smallImages[1]);
setImage("img3", smallImages[2]);
setImage("img4", largeImages[0]);
setImage("img5", largeImages[1]);
setImage("img6", largeImages[2]);

console.log("Loaded project:", projectKey);
console.log("Loaded category:", categoryKey);
console.log("Section keys:", sectionKeys);