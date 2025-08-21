const KEY_PREFIX = "hs::";

function key(quizId, mode) {
  return `${KEY_PREFIX}${quizId}::${mode}`;
}

export function loadHighscores(quizId, mode) {
  try {
    const raw = localStorage.getItem(key(quizId, mode));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addHighscore({ quizId, mode, name, score, total }) {
  const list = loadHighscores(quizId, mode);
  list.push({
    name: name?.trim() || "Anon",
    score,
    total,
    date: new Date().toISOString(),
  });
  localStorage.setItem(key(quizId, mode), JSON.stringify(list));
}
