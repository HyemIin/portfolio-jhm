export interface BlogPost {
  title: string;
  url: string;
  date: string;
  theme: string;
}

export const blogPostsByProject: Record<string, BlogPost[]> = {
  "dq-platform": [
    {
      title: "@Transactional 어노테이션 해체 분해하기",
      url: "https://hyem5019.tistory.com/entry/Transactional-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-%ED%95%B4%EC%B2%B4-%EB%B6%84%ED%95%B4%ED%95%98%EA%B8%B0",
      date: "2026.01.11",
      theme: "백엔드 개발",
    },
    {
      title: "쿠키 vs 세션 vs JWT, 실무에서는 뭐를 써야할까?",
      url: "https://hyem5019.tistory.com/entry/%EC%BF%A0%ED%82%A4-vs-%EC%84%B8%EC%85%98-vs-JWT-%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C%EB%8A%94-%EB%AD%90%EB%A5%BC-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C",
      date: "2026.04.13",
      theme: "인증/보안",
    },
    {
      title: "테스트코드 내 StackOverflow 발생 원인과 해결 과정",
      url: "https://hyem5019.tistory.com/entry/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C-%EB%82%B4-StackOverflow-%EB%B0%9C%EC%83%9D-%EC%9B%90%EC%9D%B8%EA%B3%BC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95",
      date: "2025.04.25",
      theme: "트러블슈팅",
    },
  ],
  "m42-delivery": [
    {
      title: "[의약품 배송 프로젝트] 실시간 기사 위치 갱신 성능 개선기",
      url: "https://hyem5019.tistory.com/entry/%EC%9D%98%EC%95%BD%ED%92%88-%EB%B0%B0%EC%86%A1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B8%B0%EC%82%AC-%EC%9C%84%EC%B9%98-%EA%B0%B1%EC%8B%A0-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%EA%B8%B0",
      date: "2025.10.29",
      theme: "성능 개선",
    },
  ],
  gasip: [
    {
      title: "[Gasip] Redis & Sync Schedule 을 적용해 조회수 동시성 처리",
      url: "https://hyem5019.tistory.com/entry/Gasip-Redis-Sync-Schedule-%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4-%EC%A1%B0%ED%9A%8C%EC%88%98-%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%B2%98%EB%A6%AC",
      date: "2024.04.12",
      theme: "동시성/성능",
    },
    {
      title: "[Gasip] 게시글 조회수 중복 방지 처리 로직 구현",
      url: "https://hyem5019.tistory.com/entry/Gasip-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%A1%B0%ED%9A%8C%EC%88%98-%EC%A4%91%EB%B3%B5-%EB%B0%A9%EC%A7%80-%EC%B2%98%EB%A6%AC-%EB%A1%9C%EC%A7%81-%EA%B5%AC%ED%98%84",
      date: "2024.04.01",
      theme: "동시성/성능",
    },
    {
      title: "[Gasip] queryDSL을 활용하여 교수 평균 평점 구하기",
      url: "https://hyem5019.tistory.com/entry/Gasip-queryDSL%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B5%90%EC%88%98-%ED%8F%89%EA%B7%A0-%ED%8F%89%EC%A0%90-%EA%B5%AC%ED%95%98%EA%B8%B0",
      date: "2024.05.29",
      theme: "기능 구현",
    },
    {
      title: "[Gasip] JPA / could not initialize proxy - no Session",
      url: "https://hyem5019.tistory.com/entry/Gasip-Project-JPA-could-not-initialize-proxy-no-Session",
      date: "2023.11.07",
      theme: "트러블슈팅",
    },
    {
      title: "[Gasip] 왜 Column Name이 중복이라고 뜨죠?",
      url: "https://hyem5019.tistory.com/entry/Gasip-Project-%EC%99%9C-Column-Name%EC%9D%B4-%EC%A4%91%EB%B3%B5%EC%9D%B4%EB%9D%BC%EA%B3%A0-%EB%9C%A8%EC%A3%A0-DuplicateMappingException",
      date: "2023.11.05",
      theme: "트러블슈팅",
    },
  ],
  stormcrawler: [],
};
