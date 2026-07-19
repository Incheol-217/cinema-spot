// 극장 데이터 — 여기만 편집하면 됩니다.
// screenWidth: 스크린 가로폭(m), firstRowDist: 1열~스크린 거리(m),
// rowSpacing: 열 간격(m), seatWidth: 좌석 폭(m), aisles: n번째 좌석 뒤 통로
// rows: 앞열부터 순서대로. seats: 그 열의 좌석 수.
const THEATERS = [
  {
    name: "CGV 방학",
    screens: [
      {
        name: "4DX관",
        screenWidth: 10, // 추정치
        firstRowDist: 5, // 추정치
        rowSpacing: 1.2, // 추정치 (4DX 모션시트)
        seatWidth: 0.6,
        aisles: [],
        note: "4DX는 4석 유닛이 함께 움직여 유닛 끝자리(5·8번)가 모션 체감 최대 (보급형 시트) · H12 장애인석",
        rows: [
          { label: "A", seats: 12 },
          { label: "B", seats: 12 },
          { label: "C", seats: 12 },
          { label: "D", seats: 12 },
          { label: "E", seats: 12 },
          { label: "F", seats: 12 },
          { label: "G", seats: 12 },
          { label: "H", seats: 12 },
        ],
      },
      {
        name: "6관",
        screenWidth: 11, // 추정치
        firstRowDist: 6, // 추정치
        rowSpacing: 1.1, // 추정치
        seatWidth: 0.55,
        aisles: [2, 11],
        note: "A~B열 Light존 · J10·J11 장애인석",
        rows: [
          { label: "A", seats: 13 },
          { label: "B", seats: 13 },
          { label: "C", seats: 13 },
          { label: "D", seats: 13 },
          { label: "E", seats: 13 },
          { label: "F", seats: 13 },
          { label: "G", seats: 13 },
          { label: "H", seats: 13 },
          { label: "I", seats: 13 },
          { label: "J", seats: 13, absent: [3, 4, 5, 6, 7, 8, 9] },
        ],
      },
      {
        name: "7관",
        screenWidth: 11, // 추정치
        firstRowDist: 6, // 추정치
        rowSpacing: 1.1, // 추정치
        seatWidth: 0.55,
        aisles: [2, 12],
        note: "A~B열 Light존 · J3·J4 장애인석",
        rows: [
          { label: "A", seats: 14 },
          { label: "B", seats: 14 },
          { label: "C", seats: 14 },
          { label: "D", seats: 14 },
          { label: "E", seats: 14 },
          { label: "F", seats: 14 },
          { label: "G", seats: 14 },
          { label: "H", seats: 14 },
          { label: "I", seats: 14 },
          { label: "J", seats: 14, absent: [5, 6, 7, 8, 9, 10, 11, 12] },
        ],
      },
    ],
  },
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
