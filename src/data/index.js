import math from "./quizzes/math";
import fantasy from "./quizzes/fantasy";
import words from "./quizzes/words"; 

export const quizzes = {
    fantasy: { title: "Fantasy Quiz", questions: fantasy },
    math: { title: "Mathe (Eingabe)", questions: math },
    words: { title: "Wortschatz Quiz", questions: words }
};
