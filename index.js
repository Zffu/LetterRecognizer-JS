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
        {letter: "a", asciiletters: ["𝐚", "𝚊", "𝖆", "𝕒", "𝗮", "𝑎", "𝘢", "𝒂", "𝙖", "𝒶", "𝓪", "ａ", "𝔞", "ᵃ"]}
    ]
}



