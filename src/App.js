import React from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import UserProfilePage from "./page/UserProfilePage/UserProfilePage";
import Chat from "./page/Chat/Chat"; // Chat 컴포넌트 임포트
import {
  LectureEvaluationPage,
  LectureEvaluationContentPage,
  LectureEvaluationPostPage,
} from "./page/LectureEvaluationPage/LectureEvaluationPage";
import {
  FleaMarketPage,
  FleaMarketContentPage,
  FleaMarketPostPage,
} from "./page/FleaMarketPage/fleaMarketPage";
import {
  JobForumPage,
  JobForumContentPage,
  JobForumPostPage,
} from "./page/JobForumPage/JobForumPage";
import {
  EducationMaterialPage,
  EducationalMaterialContentPage,
  EducationalMaterialPostPage,
} from "./page/EducationMaterialPage/EducationMaterialPage";
import RoommateFindForumPage from "./page/RoommateFindForum/RoommateFindForumPage";
import RoommateFindForumPostPage from "./page/RoommateFindForum/RoommateFindForumPostPage";
import RoommateFindForumContentPage from "./page/RoommateFindForum/RoommateFindForumContentPage";
import CommunityForumPage from "./page/CommunityForum/CommunityForumPage";
import CommunityForumPostPage from "./page/CommunityForum/CommunityForumPostPage";
import CommunityForumContentPage from "./page/CommunityForum/CommunityForumContentPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <div className="h-screen">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <div className="ml-60 h-1/6">
              <Header />
            </div>
            <div>
              <NavigationBar />
            </div>
            <div className="ml-60 h-5/6">
              <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/jobForums" element={<JobForumPage />} />
                <Route
                  path="/jobForums/:id"
                  element={<JobForumContentPage />}
                />
                <Route path="/jobForumsPost" element={<JobForumPostPage />} />
                <Route
                  path="/roommateFindForum"
                  element={<RoommateFindForumPage />}
                />
                <Route
                  path="/roommateFindForumPost"
                  element={<RoommateFindForumPostPage />}
                />
                <Route
                  path="/roommateFindForum/:id"
                  element={<RoommateFindForumContentPage />}
                />
                <Route
                  path="/communityForums"
                  element={<CommunityForumPage />}
                />
                <Route
                  path="/communityForumsPost"
                  element={<CommunityForumPostPage />}
                />
                <Route
                  path="/communityForums/:id"
                  element={<CommunityForumContentPage />}
                />
                <Route
                  path="/educationalMaterials"
                  element={<EducationMaterialPage />}
                />
                <Route
                  path="/educationalMaterials/:id"
                  element={<EducationalMaterialContentPage />}
                />
                <Route
                  path="/educationalMaterialsPost"
                  element={<EducationalMaterialPostPage />}
                />
                <Route
                  path="/lectureEvaluations"
                  element={<LectureEvaluationPage />}
                />
                <Route
                  path="/lectureEvaluationsPost"
                  element={<LectureEvaluationPostPage />}
                />
                <Route
                  path="/lectureEvaluations/:id"
                  element={<LectureEvaluationContentPage />}
                />
                <Route path="/fleaMarkets" element={<FleaMarketPage />} />
                <Route
                  path="/fleaMarketsPost"
                  element={<FleaMarketPostPage />}
                />
                <Route
                  path="/fleaMarkets/:id"
                  element={<FleaMarketContentPage />}
                />
                <Route path="/chat" element={<Chat />} /> // 채팅 라우트 추가
              </Routes>
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
