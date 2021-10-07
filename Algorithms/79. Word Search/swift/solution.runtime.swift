class Solution {
    typealias CharacterPosition = (row: Int, column: Int)

    var wordCharacters = [Character]()
    var board = [[Character]]()
    var nextWordCharacterToFindIndex = 0
    var previouslyUsedPositions = [CharacterPosition]()
    var previouslyViewedPositions = [CharacterPosition]()

    func exist(_ board: [[Character]], _ word: String) -> Bool {
        // Pre-checks
        self.wordCharacters = word.map { $0 }
        self.board = board
        let allBoardCharacters = board.flatMap { $0 }

        guard allBoardCharacters.count >= wordCharacters.count else {
            return false
        }

        guard wordCharacters.count > 0 else {
            return true
        }

        guard ensureEveryCharacterInWordExistsOnBoard() else {
            return false
        }

        let allCharacterWords = consecutiveCharactersAsWords(originalWord: word)
        // print("**** \(allCharacterWords)")
        // Ensure every subword is connected separately first.
        var allWordsFoundSeparately = 0

        mainLoop: for word in allCharacterWords {
            self.wordCharacters = word.map { $0 }
            self.nextWordCharacterToFindIndex = 0
            self.previouslyUsedPositions = [CharacterPosition]()
            self.previouslyViewedPositions = [CharacterPosition]()

            for initialRow in 0..<board.count {
                for initialColumn in 0..<board[initialRow].count {
                    let initialBoardPosition = CharacterPosition(row: initialRow, column: initialColumn)

                    let foundPath = findCharacter(boardCharacter: self.board[initialBoardPosition.row][initialBoardPosition.column],
                                                  boardPosition: initialBoardPosition)

                    if foundPath {
                        // print("path found")
                        allWordsFoundSeparately += 1
                        continue mainLoop
                    }
                }
            }
        }

        // print("all words found separately count \(allWordsFoundSeparately)")

        // if any sequence of subwords cannot be connected, the entire word will not be connected
        if allWordsFoundSeparately < allCharacterWords.count {
            return false
        }

        // ensure entire word is connected together
        self.wordCharacters = word.map { $0 }
        self.nextWordCharacterToFindIndex = 0
        self.previouslyUsedPositions = [CharacterPosition]()
        self.previouslyViewedPositions = [CharacterPosition]()

        for initialRow in 0..<board.count {
            for initialColumn in 0..<board[initialRow].count {
                let initialBoardPosition = CharacterPosition(row: initialRow, column: initialColumn)

                let foundPath = findCharacter(boardCharacter: self.board[initialBoardPosition.row][initialBoardPosition.column],
                                              boardPosition: initialBoardPosition)

                if foundPath {
                    return true
                }
            }
        }

        return false
    }

    private func consecutiveCharactersAsWords(originalWord: String) -> [String] {
        var subWords = [String]()
        let wordCharacters = originalWord.map { $0 }
        var nextCharacter = wordCharacters[0]
        var nextWord: [Character] = [nextCharacter]

        for characterIndex in 1..<wordCharacters.count {
            if nextCharacter == wordCharacters[characterIndex] {
                nextWord.append(nextCharacter)
            } else {
                let wordString = String(nextWord)

                subWords.append(wordString)
                nextWord = [wordCharacters[characterIndex]]
            }

            nextCharacter = wordCharacters[characterIndex]
        }

        let wordString = String(nextWord)

        subWords.append(wordString)

        return subWords
    }

    private func ensureEveryCharacterInWordExistsOnBoard() -> Bool {
        for character in wordCharacters {
            if !board.flatMap({ $0 }).contains(where: { $0 == character }) {
                return false
            }
        }

        return true
    }

    private func findCharacter(boardCharacter: Character,
                               boardPosition: CharacterPosition) -> Bool {
        if boardCharacter == wordCharacters[nextWordCharacterToFindIndex] {
            // print("found character \(boardCharacter)")
            nextWordCharacterToFindIndex += 1
            previouslyUsedPositions.append(boardPosition)

            if wordCharacters.count - 1 < nextWordCharacterToFindIndex {
                return true
            }

            // these are all the new positions to search
            let newPositions = adjacentCharactersOnBoard(boardPosition: boardPosition)
            // print("new positions at every lookup \(newPositions)")
            for position in newPositions {
                let result = findCharacter(boardCharacter: board[position.row][position.column], boardPosition: position)

                if result {
                    return result
                }
            }

            let droppedCharPosition = previouslyUsedPositions.removeLast()
            let character = board[droppedCharPosition.row][droppedCharPosition.column]
            previouslyViewedPositions.append(droppedCharPosition)
            nextWordCharacterToFindIndex -= 1
            // print("dropped char \(droppedCharPosition)")
            return false
        } else {
            return false
        }
    }

    private func adjacentCharactersOnBoard(boardPosition: CharacterPosition) -> [CharacterPosition] {
        let adjacentTop = CharacterPosition(row: boardPosition.row - 1, boardPosition.column)
        let adjacentBottom = CharacterPosition(row: boardPosition.row + 1, boardPosition.column)
        let adjacentLeft = CharacterPosition(row: boardPosition.row, boardPosition.column - 1)
        let adjacentRight = CharacterPosition(row: boardPosition.row, boardPosition.column + 1)

        let allAdjacentCharacters = [adjacentTop, adjacentLeft, adjacentRight, adjacentBottom]
        //print("potential positions at every lookup \(allAdjacentCharacters)")
        let availableAdjacentCharacters = allAdjacentCharacters.filter { characterPosition in
            characterPosition.row >= 0 &&
                characterPosition.row < board.count &&
                characterPosition.column >= 0 &&
                characterPosition.column < board[characterPosition.row].count &&
                !previouslyUsedPositions.contains(where: {
                    $0.column == characterPosition.column &&
                    $0.row == characterPosition.row
                })
        }

        let ensureNextCharacterToFindExistsInDroppedCharacters = availableAdjacentCharacters.filter { characterPosition in
            guard previouslyViewedPositions.contains(where: { $0.row == characterPosition.row && $0.column == characterPosition.column })  else {
                return true
            }

            return wordCharacters[nextWordCharacterToFindIndex] == board[characterPosition.row][characterPosition.column]
        }

        return ensureNextCharacterToFindExistsInDroppedCharacters
    }
}
