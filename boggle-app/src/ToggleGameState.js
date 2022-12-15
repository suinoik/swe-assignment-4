function ToggleGameState({gameState, setGameState, setSize, setTotalTime}) {

  const [buttonText, setButtonText] = useState("Start a new game!");
  const [startTime, setStartTime] = useState(0);
  let deltaTime;

  function updateGameState(endTime) {
    
    if (gameState === GAME_STATE.BEFORE || gameState === GAME_STATE.ENDED) {
      setStartTime(Date.now());
      setGameState(GAME_STATE.IN_PROGRESS);
      setButtonText("End game");
    } else if (gameState === GAME_STATE.IN_PROGRESS) {
      deltaTime = (endTime - startTime)/ 1000.0;
      setTotalTime(deltaTime); 
      setGameState(GAME_STATE.ENDED);
      setButtonText("Start a new game!");
    }
  }
  
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  
  return (
    <div className="Toggle-game-state">
      <Button variant="outlined" onClick={() => updateGameState(Date.now())} >
        {buttonText}
      </Button>

      { (gameState === GAME_STATE.BEFORE || gameState === GAME_STATE.ENDED)  &&
        <div className="Input-select-size">
        <FormControl >
       
        <Select
          labelId="sizelabel"
          id="sizemenu"
        
       
          onChange={handleChange}
        >
        :
        :
        
        :