;function countOnsets() {
  const input = document.getElementById("input").value;

  // 小書き文字一覧（除く「っ」）
  const smallKana = "ゃゅょぁぃぅぇぉヵヶ";
  const ignoreChars = "、。！？ー〜（）「」『』　 ";

  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const c = input[i];

    if (ignoreChars.includes(c)) continue;

    if (c === 'っ') {
      count += 1;
    } else if (smallKana.includes(c)) {
      // 小書き文字は基本カウントしない
      continue;
    } else {
      count += 1;
    }
  }

  document.getElementById("result").textContent = `音数：${count}音`;
}