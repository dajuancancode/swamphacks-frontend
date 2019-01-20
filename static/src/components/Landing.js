const React = require('react');

require('./Landing.css')

var Modal = require('./Modal')

class Landing extends React.Component {
  constructor(props) {
    super();

    this.state = {show: false};
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal() {
    this.setState({show: true});
  };

  hideModal() {
    this.setState({show: false})
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Aux Are Us</h1>
            <h5 className='subtitle '>Something catchy goes here</h5>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <div className='buttons'>
                <button type="button" className='button is-primary'>Yes</button>
                <button type="button" className='button is-danger'>No</button>
              </div>
            </Modal>
            <button type="button" className='button is-success is-outlined is-medium' onClick={this.showModal}>Let's get started</button>
            </div>
        </div>
    </section>
    )
  }
}

module.exports = Landing