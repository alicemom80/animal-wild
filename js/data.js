// 동물 데이터: id(그림 파일 이름), en(영어), ko(한글), say(읽을 소리, 없으면 en)
window.A = window.A || {};

A.THEMES = [
  { id: 'wild', ko: '숲·초원', en: 'Forest & Grassland', icon: '🦁', cover: 'lion', color: '#c3e6b5',
    words: [
      ['lion', 'lion', '사자'], ['tiger', 'tiger', '호랑이'], ['elephant', 'elephant', '코끼리'], ['giraffe', 'giraffe', '기린'], ['zebra', 'zebra', '얼룩말'],
      ['hippo', 'hippo', '하마'], ['rhino', 'rhino', '코뿔소'],
      ['panda', 'panda', '판다'], ['koala', 'koala', '코알라'], ['sloth', 'sloth', '나무늘보'], ['capybara', 'capybara', '카피바라'],
      ['lemur', 'lemur', '여우원숭이'], ['bear', 'bear', '곰'], ['wolf', 'wolf', '늑대'], ['kangaroo', 'kangaroo', '캥거루'],
      ['gorilla', 'gorilla', '고릴라'], ['camel', 'camel', '낙타'], ['cheetah', 'cheetah', '치타'], ['leopard', 'leopard', '표범'], ['crocodile', 'crocodile', '악어'],
    ] },
];

// 5개씩 묶음으로 나누기 (맨 끝 묶음은 5개보다 적을 수 있음)
A.GROUP_SIZE = 5;
A.THEMES.forEach(t => {
  t.words = t.words.map(([id, en, ko, say]) => ({
    id, en, ko, say: say || en,
    art: /^[aeiou]/i.test(en) && !/^uni/i.test(en) ? 'an' : 'a',   // unicorn 은 '유'로 시작하는 소리라 a
  }));
  t.groups = [];
  for (let i = 0; i < t.words.length; i += A.GROUP_SIZE) {
    t.groups.push(t.words.slice(i, i + A.GROUP_SIZE));
  }
});
