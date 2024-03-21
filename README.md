# instagram-clone-coding

## 실행 화면
##### 회원가입 및 로그인

|    |                                               |                                               |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| ![-](/public/preview/login.jpeg) |![-](/public/preview/login-1.jpeg)  |![-](/public/preview/login-1.jpeg)|
| ![-](/public/preview/signin-1.jpeg)| ![-](/public/preview/signin-2.jpeg) | ![-](/public/preview/signin-5.jpeg)|
| ![-](/public/preview/signin-4.jpeg)| ![-](/public/preview/signin-3.jpeg) | ![-](/public/preview/signin-6.jpeg)|


##### 피드 

|    |                                               |                                               |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| ![-](/public/preview/feed-1.png) |![-](/public/preview/feed-2.png)  |![-](/public/preview/feed-3.png)|

##### 게시글 생성 모달

|    |                                               |                                               |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| ![-](/public/preview/create-1.jpeg) |![-](/public/preview/create-2.jpeg)  |![-](/public/preview/create-3.jpeg)|


##### 게시글 상세 모달
|    |                                               |                                               
|-----------------------------------------------|-----------------------------------------------
| ![-](/public/preview/details-1.png)| ![-](/public/preview/details-2.png) 


##### 마이페이지
|    |                                               |                                               
|-----------------------------------------------|-----------------------------------------------
| ![-](/public/preview/grid-1.png)| ![-](/public/preview/grid-2.png) 




## /src 구조

###### apis
index.ts: common axios instance
ApiErrorBoundary.ts: error boundary
ㄴ auth: 회원가입/로그인/중복 아이디 체크 api
ㄴ post: 게시글 관련 api
ㄴ user: 북마크/좋아요/프로필/팔로잉/팔로우 api

###### assets
- svg files

###### constants
- modal state, global sizes 등 전역으로 사용되는 변수

###### components
ㄴ @common: 버튼, 입력폼, 모달, 체크박스, 아이콘 등 공통 컴포넌트
ㄴ auth: 회원가입/로그인 페이지
ㄴ home: 홈(피드) 페이지
ㄴ layout: 헤더, 탭바, 레이아웃 등
ㄴ post: 게시글 관련 컴포넌트
ㄴ user: 마이 페이지 내 프로필, 그리드, 탭 등


###### hooks
ㄴ @common: funnel, window size, input, storage hooks
ㄴ modal: 모달 Hook
ㄴ mutation: react-query mutation hook
ㄴ query: react-query query/infiniteQuery/queries hook
ㄴ page: 페이지 hook


###### libraries
- firebase, react-query, recoil, react-toastify 등 라이브러리 관련 파일
index.ts(AppRegister): 라이브러리 설정 파일 

###### pages
- 페이지 컴포넌트


###### routes
- react-router-dom v6 RouteObject array, route path 변수


###### styles
globalStyles.ts 
ㄴ fonts: 폰트 설정 파일
ㄴ theme: 디자인 시스템


###### utils
- 전역으로 사용되는 utils method 정의 
ㄴ storage: local storage 관리 



