class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120,
        cakeFlavor: "vanilla"
      }
    };
  }

  render() {
    return (
      <div>
        <Party {this.state.partyType} {this.state.entertainment} {this.state.venue} />
      </div>
    );
  }
 
render() {
     return (
   <div>
        <h3>Party Time!</h3> 
        <p> This {this.partytype} party will be held at {this.venue} with a maximum capacity of {this.capacity}.</p>
        <p> Featured entertainment: {this.entertainment}! We will serve a {this.cakeFlavor} cake.</p>
    </div>
    );
  }
}
       
ReactDOM.render(<App />, document.getElementById('root'));