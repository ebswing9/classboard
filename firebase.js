/**
 * Firebase 프로젝트 연결 정보
 * index.html, admin.html 둘 다 이 파일 하나만 불러 씁니다.
 * 값이 바뀌면 여기 한 곳만 고치면 돼요.
 */

// ① 이 대시보드 전용 Firebase 프로젝트 값
const DASHBOARD_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCp3vLQM0aKX7s1ArE2YD3BsLNHcbQQJFE",
  authDomain: "classboard-58841.firebaseapp.com",
  databaseURL: "https://classboard-58841-default-rtdb.firebaseio.com",
  projectId: "classboard-58841",
  storageBucket: "classboard-58841.firebasestorage.app",
  messagingSenderId: "961369750358",
  appId: "1:961369750358:web:86a2d7a9c25f1e6204b4f7"

};

// ② todaysquiz 프로젝트 값 (index.html에서 퀴즈만 읽기 전용으로 사용, admin.html은 안 씀)
const QUIZ_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAKlIm_ZDD4ICyROlSskTKP5fpSixkSeIU",
  authDomain: "todaysquiz-5167d.firebaseapp.com",
  databaseURL: "https://todaysquiz-5167d-default-rtdb.firebaseio.com",
  projectId: "todaysquiz-5167d",
  storageBucket: "todaysquiz-5167d.firebasestorage.app",
  messagingSenderId: "582156880416",
  appId: "1:582156880416:web:3f750531895cdc5f9a4a45"

};
