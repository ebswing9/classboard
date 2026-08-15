/**
 * Firebase 프로젝트 연결 정보
 *
 * Firebase 콘솔 > 프로젝트 설정 > 일반 탭 하단 "내 앱"에서 확인할 수 있는 값입니다.
 * 콘솔에 보이는 코드 스니펫 중 아래처럼 "값"만 옮겨 적어주세요.
 *
 *   ❌ import { initializeApp } from "firebase/app";  ← 이런 줄은 복사하지 마세요
 *   ❌ const app = initializeApp(firebaseConfig);      ← 이런 줄도 필요 없어요
 *   ✅ apiKey: "AIzaSy....", 같은 값들만 아래 칸에 옮겨주세요
 *
 * 값을 다 채운 뒤에는 index.html, admin.html 둘 다 이 파일 하나만 불러 쓰므로,
 * 나중에 값이 바뀌어도 여기 한 곳만 고치면 됩니다.
 */
const firebaseConfig = {
  apiKey: "AIzaSyAKlIm_ZDD4ICyROlSskTKP5fpSixkSeIU",
  authDomain: "todaysquiz-5167d.firebaseapp.com",
  databaseURL: "https://todaysquiz-5167d-default-rtdb.firebaseio.com",
  projectId: "todaysquiz-5167d",
  storageBucket: "todaysquiz-5167d.firebasestorage.app",
  messagingSenderId: "582156880416",
  appId: "1:582156880416:web:3f750531895cdc5f9a4a45"
};