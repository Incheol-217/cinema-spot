// 극장 데이터 — 여기만 편집하면 됩니다.
// screenWidth: 스크린 가로폭(m), firstRowDist: 1열~스크린 거리(m),
// rowSpacing: 열 간격(m), seatWidth: 좌석 폭(m), aisles: n번째 좌석 뒤 통로
// rows: 앞열부터 순서대로. seats: 그 열의 좌석 수.
const THEATERS = [
  {
    name: "CGV 의정부",
    screens: [
      {
        name: "IMAX관",
        screenWidth: 20, // 추정치
        firstRowDist: 9, // 추정치
        rowSpacing: 1.2, // 추정치
        seatWidth: 0.55,
        aisles: [6, 20],
        centerCol: 11.5, // 스크린 중심 = 1~22석 블록 가운데
        // 실관람 후기 추천 열 (열 라벨 → 점수 보너스)
        community: { F: 8, E: 4, G: 4,
          note: "후기 최다 추천 F열 중앙. E/G열 무난, G열부터 스크린 좌우 끝이 살짝 보임" },
        rows: [
          { label: "A", seats: 25, absent: [1, 2, 19, 20, 23, 24, 25] }, // A16~18 장애인석
          { label: "B", seats: 25, absent: [23, 24, 25] },
          { label: "C", seats: 25, absent: [23, 24, 25] },
          { label: "D", seats: 25, absent: [23, 24, 25] },
          { label: "E", seats: 25, absent: [23, 24, 25] },
          { label: "F", seats: 25, absent: [23, 24, 25] },
          { label: "G", seats: 25, absent: [23, 24, 25] },
          { label: "H", seats: 25, absent: [23, 24, 25] },
          { label: "I", seats: 25, absent: [23, 24, 25] },
          { label: "J", seats: 25, absent: [23, 24, 25] },
          { label: "K", seats: 25 },
          { label: "L", seats: 25 },
        ],
      },
    ],
  },
];
