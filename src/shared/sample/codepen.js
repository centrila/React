// This array is used for the Example.
const GAMES = [
  { id: 0, name: "Chess" },
  { id: 1, name: "Go" },
  { id: 2, name: "Risk" },
  { id: 3, name: "Cribbage"}, 
  { id: 4, name: "Spit" }
];

// This array is used for the Challenge.
const RESOURCES = [
  { 
    id: 0, 
    title: "WesBos.com - Destructuring Objects",
    url: "https://wesbos.com/destructuring-objects/"
  },
  { 
    id: 1, 
    title: "FreeCodeCamp - The Basics of Destructuring Props in React",
    url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
  },  
  { 
    id: 2, 
    title: "MDN - Destructuring assignment",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
  },
  {
    id: 3,
    title: "W3Schools - a target",
    url: "https://www.w3schools.com/tags/att_a_target.asp"
  }
];

function App() { 
  return ( 
    <div> 
      <PageTitle /> 
      <Games /> 
      <hr /> 
      <Challenge /> 
      <Resources />
    </div> 
  ); 
}
function RenderResource(props) {
  return (
    <div>
      <em>{props.resource.title}</em><br />
      <a href={props.resource.url} target="_blank">{props.resource.url}</a>
      <br />
      <br/>
    </div>
  );
}
class Resources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resources: RESOURCES
    }
  }
  
  render(){
    const resourceList = this.state.resources.map(resource => {
      return (
        <div key={resource.id}>
          <RenderResource resource={resource} />
        </div>
      );
    })
    return (
      <div>
        <h2>Additional Resources</h2>
        {resourceList}
      </div>
    );
  }
}
        
function PageTitle() {
  return (
    <h1>Code Challenge: React Components and Object Destructuring</h1>
  );
}
function RenderGame(props) {
  return (
    <strong>Game ID {props.game.id}: {props.game.name}</strong>
  );
}
class Games extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      games: GAMES
    };
  }
  
  render() {
    const gamesList = this.state.games.map(game => {
      return (
        <li key={game.id}>
          <RenderGame game={game} />
        </li>
      );
    });    
    
    return (
      <div>
        <h2>Available Games</h2>
        <ul>{gamesList}</ul>
      </div>
    );
  }
}


function RenderGame(props) {
  return (
    <strong>Game ID {props.game.id}: {props.game.name}</strong>
  );
}

function Challenge() {
  return (
    <React.Fragment>
      <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
      <ul>
        <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
        <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
        <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
      <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
      </ul>
    </React.Fragment>
  );
}

ReactDOM.render( <App />, document.getElementById("root"));


class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      bootcampName: "Nucamp"
    };
  }
     render() {
       return (
         <div>
         <Welcome bootcampName={this.state.bootcampName} />
         </div>
         
       );
     }
    }
  
  function Welcome (props) {
    return (
    <h1>Welcome to {props.bootcampName}!</h1>
    );
  } 
  
  
  ReactDOM.render(<App />, document.getElementById('root'));

  Challenge 1: Inside the JS section, create a class component named App. Inside its render() method, have it return the Welcome component. In the ReactDOM.render() method, change Welcome to App.

Challenge 2: Lift the state from the Welcome component to App, so that the state is initialized inside of App's constructor.

Challenge 3: Convert the Welcome component to a function component that returns the same welcome message as before. You will need to pass the bootcampName property of state from App to the Welcome component. It's up to you whether or not to destructure it -- either is fine. Try it both ways for practice!