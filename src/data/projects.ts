import { Project } from "@/types";

export const categories = [
  "All",
  "Work",
  "Side Project",
  "Open Source",
] as const;

export const projects: Project[] = [
  {
    slug: "dq-platform",
    title: "DQ 미래 역량 검사",
    description:
      "AI 시대에 맞는 미래 역량 진로 탐색 플랫폼. 자기보고식 설문이 아닌 게임형 시나리오 속 논서술형 문항으로 학생의 역량을 측정하고, Multi-LLM 1차 채점 + 전문가 2차 검증 하이브리드 방식으로 채점합니다. WEF 및 2022 개정 교과 핵심역량 기반 6대 유형, 12 코어 스킬, 30 진로 갈래를 진단합니다.",
    category: "Work",
    company: "코드하나",
    date: "2025.11 - Present",
    thumbnail: "/projects/placeholder.png",
    tags: ["Java", "Spring Boot", "Spring AI", "JPA", "MySQL", "Redis", "AWS", "Next.js", "React"],
    overview:
      "디큐(DQ, Decode Quiz)는 AI 시대에 맞는 미래 역량 진로 탐색 플랫폼입니다. 기존 진로 검사는 자기보고식 객관식으로 응답 왜곡과 인지 편향이 발생하고, 20세기 이론 기반 흥미/성격 유형만 분류할 뿐 미래 핵심 역량을 측정하지 못합니다. DQ는 WEF 2025 및 2022 개정 교과 핵심역량 기반의 6 카테고리 x 12 코어 스킬 x 30 진로 갈래 프레임워크로, 게임형 시나리오 속 100% 논서술형 문항(6부서 24문항, 45~90분 몰입형 스토리 미션)을 통해 학생의 미래 역량을 측정합니다. Multi-LLM 1차 자동 채점과 전문가 2차 검증 하이브리드 방식으로 채점하며, 학생/교사(학부모) 맞춤형 리포트와 AI 액션 플랜을 제공합니다. 2025년 9월 미래 역량 진단 시스템 특허 출원(10-2025-0130902), 2026 KERIS 부산 에듀테크 소프트랩 실증 사업 선정, 2025 RISE CUK-GAIA Alliance 우수 사례 선정 등의 성과를 기록했습니다.",
    role: "풀스택 개발",
    team: "1명",
    links: [
      {
        label: "서비스",
        url: "https://dq.ai.kr",
      },
    ],
    highlights: [
      "Spring Boot 멀티모듈 아키텍처 설계 및 구현 (core, core-web, user-api, admin-api)",
      "LLM 기반 논서술형 답변 자동 채점 파이프라인 설계 및 구축 (Gemini, OpenAI, Claude 3사 12종 모델 추상화)",
      "LLM 호출 트랜잭션 분리로 DB 커넥션 고갈 장애 해결 (HikariCP 장기 점유 0건)",
      "채점 전용 스레드풀 격리 및 LLM 3단 폴백 재시도 설계 (지수 백오프 → 보강 프롬프트 → 기본 모델 폴백)",
      "LLM 환각, 형식 이탈, 프롬프트 인젝션 방어 설계 (코드값 echo, 점수 clamp, 경계 태그, 무회귀 가드)",
      "이벤트 기반 비동기 학습 완료 처리: ChapterCompletedEvent 발행으로 TC/PSC 점수 비동기 계산",
      "AWS 인프라 구축 (ALB → private EC2 → RDS, ElastiCache Redis 3노드), 월 비용 37% 절감",
      "TDD 기반 개발 (BE 테스트 2,829건, E2E 492건), AI 에이전트 기반 1인 풀스택 개발 체계 구축",
      "부산교육대학교 주관 실증사업 참여, 총 2,000건 검사 운영 (홍대부속초, 성곡중, 서초 유스센터)",
      "PortOne(아임포트) 결제 시스템 연동",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Redis",
      "Next.js",
      "React",
      "TypeScript",
      "Recoil",
      "SWR",
      "AWS",
      "Docker",
      "Playwright",
      "Google Gemini",
      "OpenAI",
    ],
  },
  {
    slug: "m42-delivery",
    title: "Logistics",
    description:
      "배송 기사 위치를 실시간으로 추적하고, 배포 안정성을 확보한 의약품 배송 플랫폼 백엔드 API.",
    category: "Work",
    company: "모빌리티42",
    date: "2025.09 - 2025.10",
    thumbnail: "/projects/placeholder.png",
    tags: ["Kotlin", "Spring Boot", "Coroutine", "SSE", "Nginx"],
    overview:
      "모빌리티42에서 담당한 의약품 배송 플랫폼의 메인 API 설계 및 구현 프로젝트입니다. 배송 기사의 실시간 위치 추적, Nginx 캐시 일관성 확보, Spring Actuator 기반 배포 검증 시스템 등 운영 안정성에 중점을 둔 백엔드 시스템을 구축했습니다.",
    role: "백엔드 개발",
    links: [
      {
        label: "기술 블로그",
        url: "https://hyem5019.tistory.com/entry/%EC%9D%98%EC%95%BD%ED%92%88-%EB%B0%B0%EC%86%A1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B8%B0%EC%82%AC-%EC%9C%84%EC%B9%98-%EA%B0%B1%EC%8B%A0-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%EA%B8%B0",
      },
    ],
    highlights: [
      "[성능 개선] HTTP 단건 요청 구조를 SSE + 코루틴 Flow 스트림으로 전환, 배송 기사 위치를 3초 간격으로 실시간 반영",
      "[응답 지연시간 45% 단축] TCP 핸드셰이크·헤더 전송 시간 감소 (평균 1초 -> 0.5초)",
      "[송수신 데이터 90% 절감] 송신 8.5KB->1.2KB, 수신 32KB->1.6KB",
      "[캐시 일관성] Nginx root 컨테이너 내 구버전 동적 리소스 캐시 일괄 삭제 로직 구현, 버그 재발률 0%",
      "[모니터링] Spring Actuator 기반 배포 버전·브랜치·타임스탬프 실시간 검증 시스템 구축",
    ],
    techStack: [
      "Kotlin",
      "Spring Boot",
      "Coroutine",
      "Flow",
      "SSE",
      "Nginx",
      "Spring Actuator",
    ],
  },
  {
    slug: "gasip",
    title: "GASIP",
    description:
      "80명 이상 사용자를 보유한 가천대학교 교수 평가 서비스. Redis 기반 동시성 제어와 캐싱 최적화.",
    category: "Side Project",
    date: "2023.08 - 2024.09",
    thumbnail: "/projects/placeholder.png",
    tags: ["Java", "Spring Boot", "Redis", "Nginx", "JMeter"],
    overview:
      "가천대학교 학생들이 교수와 강의를 평가하고 공유할 수 있는 커뮤니티 서비스입니다. 80명 이상의 실사용자를 확보했으며, Redis 기반 조회수 동시성 제어와 Nginx 마이크로 캐싱으로 성능을 최적화했습니다.",
    role: "백엔드 개발",
    team: "4명",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/GASIP-PROJECT/gasip-backend",
      },
      {
        label: "기술 블로그",
        url: "https://hyem5019.tistory.com/entry/Gasip-Redis-Sync-Schedule-%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4-%EC%A1%B0%ED%9A%8C%EC%88%98-%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%B2%98%EB%A6%AC",
      },
    ],
    highlights: [
      "[동시성 제어] Redis 싱글스레드 활용, 조회수를 Redis 임시 저장 후 1분 주기 MySQL 병합으로 DB Lock 부하 제거",
      "[처리 속도 77% 단축] 부하테스트 기준 26,000ms -> 6,000ms",
      "[캐싱] Redis + Nginx micro caching 기반 인기글 캐싱, TPS 185% 향상 및 응답 시간 70% 단축",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "JPA",
      "QueryDSL",
      "Redis",
      "MySQL",
      "Nginx",
      "GitHub Actions",
      "JMeter",
    ],
  },
  {
    slug: "stormcrawler",
    title: "Apache StormCrawler",
    description:
      "오픈소스 기여. waitAck 캐시 유연성 확보로 대규모 실시간 데이터 스트림의 안정적 ACK 처리 보장.",
    category: "Open Source",
    date: "2024",
    thumbnail: "/projects/placeholder.png",
    tags: ["Java", "Apache Storm", "Open Source"],
    overview:
      "Apache StormCrawler(GitHub Stars 1.0k+)에 기여한 오픈소스 프로젝트입니다. 하드코딩된 waitAck 캐시의 TTL·용량 설정으로 대량 색인 시 캐시 조기 만료 및 중복 인덱싱이 발생하던 문제를 해결하기 위해, 설정 파일 기반 동적 캐시 관리 기능을 구현했습니다.",
    role: "오픈소스 기여자",
    links: [
      {
        label: "GitHub Issue",
        url: "https://github.com/apache/stormcrawler/issues/1698",
      },
    ],
    highlights: [
      "waitAck 캐시를 설정 파일 기반으로 동적 관리하도록 개선",
      "ACK 누락률 0%, 대량 데이터 처리 안정성 및 인덱싱 효율 향상",
    ],
    techStack: ["Java", "Apache Storm"],
  },
];
