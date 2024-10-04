import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userInfo: null, // 사용자 정보를 저장할 상태
  login: () => {},
  logout: () => {},
  setUserInfo: () => {}, // 사용자 정보를 설정할 메서드
});

export default AuthContext;
