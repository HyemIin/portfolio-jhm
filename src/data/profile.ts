export const profile = {
  name: "정혜민",
  nameEn: "Hyemin Jeong",
  title: "Software Engineer",
  email: "hyem5019@gmail.com",
  github: "https://github.com/HyemIin",
  blog: "https://hyem5019.tistory.com",
  education: "가천대학교 컴퓨터공학과",
  bio: "AI를 적극 활용해 1인 풀스택 개발 체계를 구축하고, 기획부터 현장 검사 운영까지 서비스의 전 과정을 직접 경험한 백엔드 엔지니어입니다.",
  introductions: [
    {
      title:
        "AI 에이전트로 1인 개발 체계를 만들고, API 183건과 테스트 2,829건을 개발했습니다.",
      description:
        "DQ 미래 역량 검사 플랫폼을 개발하면서, 1인 체제에서 기획부터 BE, FE, QA까지 풀 사이클을 반복하는 것은 속도와 품질 모두에 한계가 있었습니다. Claude 스킬 기반 역할별 에이전트 하네스를 설계하고, TDD 기반 개발을 유도하는 훅과 병렬 세션 충돌 방지 락을 적용해 AI와 함께 개발하는 체계를 구축했습니다. 그 결과 3개월간 API 183건, BE 테스트 2,829건, E2E 492건을 개발할 수 있었습니다.",
    },
    {
      title:
        "개발자이지만, 서비스 기획과 현장 운영까지 직접 뛰었습니다.",
      description:
        "DQ는 코드만으로 완성되는 서비스가 아니었습니다. 논서술형 검사라는 새로운 형태의 역량 진단을 기획하고, 디자인을 검증하고, 홍대부속초·성곡중·서초 유스센터 등 학교와 기관을 직접 방문해 현장 검사를 진행했습니다. 부산교육대학교 주관 서비스 실증사업에도 참여하여, 총 2,000건의 검사를 성공적으로 완료했습니다. 이 과정에서 개발자의 역할이 코드 작성에 그치지 않는다는 것을 체감했습니다.",
    },
  ],
};

export const experiences = [
  {
    company: "코드하나",
    logo: "/codehana-logo.png",
    department: "DQ 미래 역량 검사 개발",
    role: "개발 총괄",
    period: "2025.11 - Present",
    sections: [
      {
        category: "서비스 기획",
        items: [
          "논서술형 문항 기획 및 루브릭(채점 지표) 설계",
          "응시 학생 역량 리포트 기획 및 구현",
          "학부모 리포트 공유 시스템 기획 (TTL 토큰 기반 비로그인 조회)",
          "교사용 학생 관리 대시보드(코스웨어) 구현",
        ],
      },
      {
        category: "서비스 개발",
        subsections: [
          {
            label: "공통",
            items: [
              "Spring Boot 멀티모듈 아키텍처 설계 (core, core-web, user-api, admin-api)",
              "AI 에이전트 기반 1인 풀스택 개발 체계 구축 (하네스 엔지니어링)",
              "채점 단위/토큰 사용량을 고려한 LLM 호출 비용 효율화 (전략 패턴, 프롬프트 동적 조립)",
              "채점 검증 E2E 하네스 구축 (페르소나 답안 자동 생성, 회귀 검증 자동화)",
              "검사 입장 코드 게이트 및 자동 종료 리스너 구현",
            ],
          },
          {
            label: "응시자",
            items: [
              "JWT 기반 AccessToken/RefreshToken 인증, 중복 로그인 방지 (세션 ID 비교)",
              "객관식 문항 풀이 및 객관식 리포트 생성",
              "논서술형 문항 풀이 및 LLM 자동 채점 파이프라인 구축 (Gemini, OpenAI, Claude 모델 추상화)",
              "논서술형 문항 풀이 시 900ms 단위로 Redis 자동저장 로직 구현",
              "논서술형 풀이별 활동 로그 저장 (문항 진입/이탈/답변 변경 이력 추적)",
              "마이페이지 역량 리포트 (챕터별 점수, 강점 카드, 6역량 정의, 직무 카탈로그)",
            ],
          },
          {
            label: "관리자",
            items: [
              "논서술형 문항/시나리오/루브릭 관리 CRUD 및 챕터 할당 시스템",
              "LLM 프롬프트/모델/파라미터 무배포 관리 (용도당 활성 1건 불변식, 감사 추적 stamping)",
              "채점 결과 검수 및 확정(human-in-the-loop), 재채점 워크플로우",
              "채점 실패 문항 단위 FAILED 기록 및 관리자 화면 가시화/재처리",
              "학생 종합평가, 학습자 유형 관리, 추천 강의 관리",
            ],
          },
          {
            label: "교사",
            items: [
              "소속 반 챕터 할당 현황 일괄 조회 및 학생 관리 대시보드",
              "검사 세션 생성/시작/종료, 실시간 응시 감독 스냅샷 (폴링 3~5초)",
              "학생별 활동 로그 타임라인, 전체 일시정지 기능",
              "학부모 공유 링크 발급 (TTL 토큰 기반 비로그인 리포트 조회)",
            ],
          },
        ],
      },
      {
        category: "서비스 실증 및 테스트",
        items: [
          "부산교육대학교 주관 실증사업 참여, 총 2,000건 검사 운영",
          "홍대부속초, 성곡중, 서초 유스센터 등 현장 검사 진행 및 피드백 수집",
        ],
      },
      {
        category: "인프라",
        items: [
          "AWS 인프라 구축 (ALB, private EC2, RDS, ElastiCache Redis 3노드)",
          "CI/CD 배포 환경 구축 (CodePipeline, ECR), 월 비용 37% 절감",
          "카카오워크 웹훅 기반 서버 에러 자동 알림 (LLM 에러 분석 내용 즉시 전달)",
        ],
      },
    ],
  },
  {
    company: "모빌리티42",
    logo: "/m42-logo.png",
    department: "개발 1팀",
    role: "Kotlin Software Engineer (인턴)",
    period: "2025.08 - 2025.10",
    sections: [
      {
        category: "서비스 개발",
        items: [
          "의약품 배송 플랫폼 메인 API 설계 및 구현",
        ],
      },
      {
        category: "인프라",
        items: [
          "Spring Actuator 기반 배포 버전 실시간 검증 시스템 구축",
        ],
      },
    ],
  },
];

export const education = [
  {
    title: "가천대학교",
    logo: "/gachon-logo.png",
    subtitle: "컴퓨터공학과 학사",
    period: "2017.03 - 2023.08",
  },
];

export const skills = {
  "Backend Engineering": [
    "Java",
    "Kotlin",
    "Spring Boot",
    "JPA",
    "QueryDSL",
    "MySQL",
    "Redis",
  ],
  DevOps: [
    "AWS EC2",
    "AWS RDS",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Docker",
    "Nginx",
  ],
  Frontend: ["Next.js", "React", "TypeScript", "Recoil", "SWR"],
  Collaboration: ["Figma", "Jira", "Redmine"],
};
