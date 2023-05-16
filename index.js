const LetterRecognizer = {
    recognize(string) {
        this.dictionary.forEach(dicEntry => {
            dicEntry.asciiletters.forEach(letter => {
                string = string.replaceAll(letter, dicEntry.letter)
            })
        })
        return string;
    },
    dictionary: [
        {letter: "a", asciiletters: ["𝐚", "𝚊", "𝖆", "𝕒", "𝗮", "𝑎", "𝘢", "𝒂", "𝙖", "𝒶", "𝓪", "ａ", "𝔞", "ᵃ"]},
        {letter: "b", asciiletters: ["𝐛", "𝚋", "𝖇", "𝕓", "𝗯", "𝑏", "𝘣", "𝒃", "𝙗", "𝒷", "𝓫", "ｂ", "𝔟", "ᵇ"]},
        {letter: "c", asciiletters: ["𝐜", "𝚌", "𝖈", "𝕔", "𝗰", "𝑐", "𝘤", "𝒄", "𝙘", "𝒸", "𝓬", "ｃ", "𝔠", "ᶜ"]}
    ]
}



