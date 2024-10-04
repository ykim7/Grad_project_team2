import ForumPage from "../generic/ForumPage";
import ForumContentPage from "../generic/ForumContentPage";
import ForumPostPage from "../generic/ForumPostPage";

const EducationMaterialPage = () => {
  return <ForumPage name={"educationalMaterials"} />;
};

const EducationalMaterialContentPage = () => {
  return <ForumContentPage name={"educationalMaterials"} />;
};

const EducationalMaterialPostPage = () => {
  return <ForumPostPage name={"educationalMaterials"} />;
};

export {
  EducationMaterialPage,
  EducationalMaterialContentPage,
  EducationalMaterialPostPage,
};
