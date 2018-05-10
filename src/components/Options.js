import React from 'react';
import Option from './Option';

class Options extends React.Component {
    render () {
      return (
        <div className="option-list mb-3">
          <p className="lead text-primary mt-5"><strong>{this.props.isHere}</strong></p>
          
          {this.props.option.map(option => <Option key={option} optiontext={option} oprnModal={this.props.oprnModal}/>)}

          {/* {this.props.option.map(option => <Option key={option} optiontext={option} removeSingleOption={this.props.removeSingleOption}/>)} */}

          <button disabled={this.props.optionIsHere} onClick={this.props.removeAllOptions} className="btn btn-danger mt-3">Remove All Option</button>
        </div>
      );
    }
  };

  export {Options as default};