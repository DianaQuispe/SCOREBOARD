let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];
const Header =props =>   {  
  return (
    <div >
<header className=' header ' >
  <div className='stats'>
    <div>PLAYERS: {props.players.length}</div>
    <div>TOTALPOINTS: {props.players.map(a => a.score).reduce((a, b) => a + b)}</div>
  </div>
  
  <div className='stopwatch '>
    <h2>STOPWATCH</h2>
    <div className ='stopwatch-time'>
      0 
    </div>
        <button>START</button>
        <button>RESET</button>

  </div>
</header>
</div>
);
} 

const PlayerList = props => {
  let play = PLAYERS.map(  index => { return ( 
  <div>
    <div className='player' >
      <p className='player-name'>{index.name}</p>   
      <div className='player-score counter'>
        <button className='counter-action decrement btn'>-</button>
        <span className='counter-score'>{index.score}</span>
        <button className='counter-action increment btn'>+</button>
    </div>
  </div>
</div>
)
}
)
  
  return(
    <div >
          {play}


    </div>
  );
}
const PlayerForm = props => {
  return(
    <div className='add-player-form' >
      <form>
      <input type="text" placeholder='ENTER A NAME' />
        <input type="submit" value='add player' />
      </form>
    </div>
  );
}

const Application = ({title, players}) => {
   return (
     <div className='scoreboard'>
      <Header players={players}/>
      <PlayerList players={players}/>
      <PlayerForm />    
     </div>   
   ) ;
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));