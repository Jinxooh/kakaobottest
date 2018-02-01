const checkStar = (month, day) => {
  const name = [
    '물병자리', '물고기자리', '양자리', '황소자리',
    '쌍둥이자리', '게자리', '사자자리', '처녀자리',
    '천칭자리', '전갈자리', '사수자리', '염소자리',
  ];
  const starArray = [20, 19, 21, 20, 21, 22, 23, 23, 24, 23, 23, 25];
  const monthCheck = month === 0 ? 11 : month - 1;
  const starNumber = starArray[month] <= day ? month : monthCheck;
  const starName = name[starNumber];
  return { starName, starNumber };
};

export default checkStar;
