import React from 'react';

class Form extends React.Component {
    state = {
      error: undefined
    }
    //-------------------- old method
    // constructor (props) {
    //   super(props);
    //   this.addOptions = this.addOptions.bind(this);
    //   this.state = {
    //     error: undefined
    //   }
    // }

    //------------ old emthod
    // addOptions(e) {
    //   e.preventDefault();
    //   let value = e.target.elements.option.value.trim();
    //   let error = this.props.addOption(value);
    //   this.setState((e) => ({
    //     error: error
    //   }))
    //   if (!error) {
    //     e.target.elements.option.value = ''
    //   }
    // }

    addOptions = (e) => {
      e.preventDefault();
      let value = e.target.elements.option.value.trim();
      let error = this.props.addOption(value);
      this.setState((e) => ({
        error: error
      }))
      if (!error) {
        e.target.elements.option.value = ''
      }
    }
    render () {
      return (
        <div className="from-group">
          <form onSubmit={this.addOptions}>
            {this.state.error && <p>{this.state.error}</p>}
            <div className="input-group">
              <input className="form-control" type="text" name="option" />
              <button className="btn btn-primary">Add Option</button>
            </div>
          </form>
        </div>
      );
    }
  };

  export {Form as default};