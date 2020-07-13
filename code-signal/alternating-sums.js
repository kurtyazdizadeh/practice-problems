function alternatingSums(a) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      arr1.push(a[i]);
    } else {
      arr2.push(a[i]);
    }
  }

  let team1weight = 0;
  let team2weight = 0;

  if (arr1.length === 1) {
    team1weight = arr1[0];
  } else if (arr1.length > 1) {
    team1weight = arr1.reduce((a, b) => a + b);
  }

  if (arr2.length === 1) {
    team2weight = arr2[0];
  } else if (arr2.length > 1) {
    team2weight = arr2.reduce((a, b) => a + b);
  }

  return [team1weight, team2weight];

}
