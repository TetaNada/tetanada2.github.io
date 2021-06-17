import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players :[],
    balance: '',
    value: '',
    message:'',
    winner: ''
  };

  async componentDidMount () {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const winner = await lottery.methods.winner().call();

    this.setState({ manager,players,balance,winner });
  }

onSubmit = async (event) => {
  event.preventDefault();

  const accounts = await web3.eth.requestAccounts();

  this.setState({message: 'Waiting for transaction to proccess...'});

  await lottery.methods.enter().send({
    from: accounts[0],
    value: web3.utils.toWei(this.state.value,'ether')
  });

  this.setState({message:'You have been entered!'})
};

onClick = async (event) => {
  const accounts = await web3.eth.getAccounts();

  this.setState({message: 'Waiting on transaction to proccess...'});

  await lottery.methods.pickWinner().send({
    from: accounts[0]
    
  });
  this.setState({message: 'A winner has been picked!'});
  const winnerA = this.state.winner;
  this.setState({message: 'A winner is ',winnerA});
};
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          Contract manager: {this.state.manager}. 
          </p>
          <p>
          There are currently {this.state.players.length} people that entered,
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether.
          </p>
          <hr />

          <form onSubmit={this.onSubmit}>
            <h4>Try your luck</h4>
            <div>
              <label>Amount of ether to enter</label>
              <input 
                value = {this.state.value}
                onChange={event => this.setState({value: event.target.value})}
              />
              
            </div>
            <button>ENTER</button>
          </form>
          <hr />

          <h4>Want to pick a winner?</h4>
          <button onClick = {this.onClick}>Pick a winner!</button>

          <hr />

          <h1>{this.state.message}</h1>
          
      </div>
    
  );
}
}

export default App;
