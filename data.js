// 극장 데이터 — 여기만 편집하면 됩니다.
// screenWidth: 스크린 가로폭(m), firstRowDist: 1열~스크린 거리(m),
// rowSpacing: 열 간격(m), seatWidth: 좌석 폭(m), aisles: n번째 좌석 뒤 통로
// rows: 앞열부터 순서대로. seats: 그 열의 좌석 수.
const THEATERS = [
  {
    name: "샘플시네마 강남점", // ← 실제 지점으로 교체
    screens: [
      {
        name: "1관",
        screenWidth: 12,
        firstRowDist: 6,
        rowSpacing: 1.1,
        seatWidth: 0.55,
        aisles: [4, 12],
        rows: [
          { label: "A", seats: 16 },
          { label: "B", seats: 16 },
          { label: "C", seats: 16 },
          { label: "D", seats: 16 },
          { label: "E", seats: 16 },
          { label: "F", seats: 16 },
          { label: "G", seats: 16 },
          { label: "H", seats: 16 },
          { label: "I", seats: 16 },
          { label: "J", seats: 14 },
        ],
      },
      {
        name: "2관 (소형)",
        screenWidth: 8,
        firstRowDist: 4,
        rowSpacing: 1.0,
        seatWidth: 0.55,
        aisles: [5],
        rows: [
          { label: "A", seats: 10 },
          { label: "B", seats: 10 },
          { label: "C", seats: 10 },
          { label: "D", seats: 10 },
          { label: "E", seats: 10 },
          { label: "F", seats: 10 },
        ],
      },
    ],
  },
];
