const smithwaterman = (sequence1: string, sequence2: string) => {
  const gapPenalty = -1;
  const matchScore = 2;
  const mismatchPenalty = -1;

  const m = sequence1.length;
  const n = sequence2.length;

  // Create a scoring matrix
  const scoreMatrix = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Track the maximum score and its position
  let maxScore = 0;
  let maxPos = { i: 0, j: 0 };

  // Fill the scoring matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const match =
        sequence1[i - 1] === sequence2[j - 1]
          ? scoreMatrix[i - 1][j - 1] + matchScore
          : scoreMatrix[i - 1][j - 1] + mismatchPenalty;
      const deleteGap = scoreMatrix[i - 1][j] + gapPenalty;
      const insertGap = scoreMatrix[i][j - 1] + gapPenalty;

      // The Smith-Waterman difference: no negative scores
      scoreMatrix[i][j] = Math.max(0, match, deleteGap, insertGap);

      // Track the maximum score
      if (scoreMatrix[i][j] > maxScore) {
        maxScore = scoreMatrix[i][j];
        maxPos = { i, j };
      }
    }
  }

  // Traceback from the position of the maximum score
  let alignedSeq1 = "";
  let alignedSeq2 = "";

  let { i, j } = maxPos;

  while (i > 0 && j > 0 && scoreMatrix[i][j] > 0) {
    if (
      scoreMatrix[i][j] ===
      scoreMatrix[i - 1][j - 1] +
        (sequence1[i - 1] === sequence2[j - 1] ? matchScore : mismatchPenalty)
    ) {
      alignedSeq1 = sequence1[i - 1] + alignedSeq1;
      alignedSeq2 = sequence2[j - 1] + alignedSeq2;
      i--;
      j--;
    } else if (scoreMatrix[i][j] === scoreMatrix[i - 1][j] + gapPenalty) {
      alignedSeq1 = sequence1[i - 1] + alignedSeq1;
      alignedSeq2 = "-" + alignedSeq2;
      i--;
    } else {
      alignedSeq1 = "-" + alignedSeq1;
      alignedSeq2 = sequence2[j - 1] + alignedSeq2;
      j--;
    }
  }

  return { alignedSeq1, alignedSeq2, maxScore };
};

export default smithwaterman;
