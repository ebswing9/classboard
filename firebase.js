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
  apiKey: "AIzaSyCp3vLQM0aKX7s1ArE2YD3BsLNHcbQQJFE",
  authDomain: "classboard-58841.firebaseapp.com",
  databaseURL: "https://classboard-58841-default-rtdb.firebaseio.com",
  projectId: "classboard-58841",
  storageBucket: "classboard-58841.firebasestorage.app",
  messagingSenderId: "961369750358",
  appId: "1:961369750358:web:86a2d7a9c25f1e6204b4f7"
};