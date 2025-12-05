export enum AppMode {
  IDLE = 'IDLE',
  WEATHER = 'WEATHER',
  COUNTRY = 'COUNTRY'
}

export interface LocationData {
  name: string;
  lat: number;
  lng: number;
  description: string;
  weatherInfo: string;
}

export const LOCATIONS: LocationData[] = [
  {
    name: "대한민국, 서울 (Seoul)",
    lat: 37.5665,
    lng: 126.9780,
    description: "대한민국의 수도이자 거대 도시로, 현대적인 마천루와 첨단 기술 지하철, 대중문화가 불교 사원, 고궁, 노점상과 공존합니다.",
    weatherInfo: "현재 맑음, 기온 18°C. 한강 공원에서 산책하기 좋은 날씨입니다."
  },
  {
    name: "미국, 뉴욕 (New York)",
    lat: 40.7128,
    lng: -74.0060,
    description: "세계의 문화, 금융, 미디어 수도로 불리며, 자유의 여신상과 타임스퀘어 등 상징적인 랜드마크가 가득합니다.",
    weatherInfo: "약간 흐림, 기온 12°C. 센트럴 파크에 가벼운 안개가 끼어 있습니다."
  },
  {
    name: "프랑스, 파리 (Paris)",
    lat: 48.8566,
    lng: 2.3522,
    description: "예술, 패션, 미식, 문화의 중심지입니다. 에펠탑과 루브르 박물관이 있는 낭만의 도시입니다.",
    weatherInfo: "비, 기온 9°C. 카페에서 따뜻한 커피를 즐기기 좋은 분위기입니다."
  },
  {
    name: "호주, 시드니 (Sydney)",
    lat: -33.8688,
    lng: 151.2093,
    description: "오페라 하우스와 하버 브리지로 유명한 항구 도시입니다. 아름다운 해변과 활기찬 도시 생활이 조화를 이룹니다.",
    weatherInfo: "쾌청함, 기온 25°C. 본다이 비치에서 서핑을 즐기는 사람들이 많습니다."
  },
  {
    name: "일본, 도쿄 (Tokyo)",
    lat: 35.6762,
    lng: 139.6503,
    description: "네온 사인이 빛나는 고층 빌딩과 역사적인 사원이 어우러진 곳입니다. 세계에서 가장 인구 밀도가 높은 도시 중 하나입니다.",
    weatherInfo: "구름 조금, 기온 20°C. 시원한 바람이 불어 야외 활동에 적합합니다."
  },
  {
    name: "영국, 런던 (London)",
    lat: 51.5074,
    lng: -0.1278,
    description: "템즈강이 흐르는 영국의 수도로, 국회의사당, 빅벤, 런던탑 등 2천 년의 역사를 간직하고 있습니다.",
    weatherInfo: "소나기, 기온 10°C. 전형적인 런던 날씨로 우산을 챙기는 것이 좋습니다."
  }
];