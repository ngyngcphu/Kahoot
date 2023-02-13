export const events = {
    HOST_JOINED: 'HOST_JOINED', //Lobby.js -> emit quizId
    SHOW_PIN: 'SHOW_PIN',       //Lobby.js -> on pin
    UPDATE_PLAYERS_IN_LOBBY: 'UPDATE_PLAYERS_IN_LOBBY', //Lobby.js -> on players
    HOST_STARTED_GAME: 'HOST_STARTED_GAME', //Lobby.js -> emit pin
   
    PLAYER_JOINED: 'PLAYER_JOINED', //JoinGame.js -> emit (nickname, pin)
    GAME_NOT_FOUND: 'GAME_NOT_FOUND', //JoinGame.js -> on (not found game)
    PLAYER_JOINED_SUCCESSFULLY: 'PLAYER_JOINED_SUCCESSFULLY', //JoinGame.js -> on

    GAME_HAS_STARTED: 'GAME_HAS_STARTED', //Instruction.js -> on

    FETCH_INTRO: 'FETCH_INTRO', // Start.js -> emit pin
    GAME_INTRO: 'GAME_INTRO',   // Start.js -> on (quizName, numberOfQuestions)

    READY: 'READY', //PlayerStart.js -> on

    FETCH_QUESTION: 'FETCH_QUESTION', //Question.js -> emit pin
    RECEIVE_QUESTION: 'RECEIVE_QUESTION' //Question.js -> on(question, questionNumber, numberOfQuestions)
};