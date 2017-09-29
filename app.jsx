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
    <div>
<header className='header' >
  <table className='stats'>
  <tr> <td>PLAYERS: {props.players.length}</td> </tr>
  <tr><td>TOTALPOINTS: 5</td></tr>
  </table>
  
  <div className='stopwatch'>
  <h2>STOPWATCH</h2>
    <div className ='stopwatch-time'>
    0
      <button>START</button>
      <button>RESET</button>
    </div>

  </div>
</header>
</div>
);
} 
const PlayerList = props => {
  return(
    <div className='player'>
      <p className='player-name'>sdf</p>
      <div className='player-score counter'>
        <button className='counter-action decrement btn'>sd</button>
        <span className='counter-score'>ass</span>
        <button className='counter-action increment btn'></button>

      </div>
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