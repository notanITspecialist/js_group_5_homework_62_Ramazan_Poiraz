import React, {Component} from 'react';
import TextForm from "./form/form";
import ListMessages from "./listMessages/listMessages";
import Container from "reactstrap/es/Container";
import axios from 'axios'

class Messanger extends Component {
  state = {
    inpAuthor: '',
    inpMessage: '',
    listMessages: [],
    intervalIndicator: setInterval( async ()=> {
      console.log('itereted')
      const messages = await axios.get('http://146.185.154.90:8000/messages?datetime='+this.state.listMessages[0].datetime);
      if(messages.data[0]){
        this.createMessages()
      }
    },3000)
  };

  addNewMessage = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.set('author', this.state.inpAuthor);
    data.set('message',this.state.inpMessage);

    await axios.post('http://146.185.154.90:8000/messages', data);
    document.getElementById('message').value = '';
    this.setState({inpMessage: ''});
  };

  createMessages = async () => {
    const messages = await axios.get('http://146.185.154.90:8000/messages');
    const listMessages = messages.data.reverse();
    this.setState({listMessages})
  };

  changeAuthor = e => {
    this.setState({inpAuthor: e.target.value})
  };

  changeMessage = e => {
    this.setState({inpMessage: e.target.value})
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalIndicator)
  }

  componentDidMount() {
    this.createMessages();
  }

  render() {
    return (
        <Container className='d-flex flex-column align-items-center bg-light border rounded'>
          <TextForm
              onClick={this.addNewMessage}
              changeAuthor={this.changeAuthor}
              changeMessage={this.changeMessage}
              inpAuthor={this.state.inpAuthor}
              inpVal={this.state.inpMessage}
          />
          <ListMessages messageList={this.state.listMessages}/>
        </Container>
    );
  }
}

export default Messanger;
