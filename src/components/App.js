import React from 'react';
import Form from './Form';
import Header from './Header';
import Options from './Options';
import OptionsModal from './OptionsModal';

class MyApp extends React.Component {
    state = {
        options: [],
        selectOption: undefined
    }
    removeAllOptions = () => {
        this.setState(() => ({
            options: []
        }))
    }
    addOption = (option) => {
        if (!option) {
        return "Add Valid value"   
        } else if(this.state.options.indexOf(option) > -1) {
        return 'This value already exists'
        }
        this.setState((e) => ({
        options: e.options.concat([option])
        }));
    }
    // removeSingleOption = (optionToRemove) => {
    //     this.setState((e) => {
    //         return {
    //             options: e.options.filter(option => {
    //                 return optionToRemove !== option;
    //             })
    //         };
    //     })
    // }
    openModal = (optionToRemove) => {
        this.setState(() => ({
            selectOption: optionToRemove
        }))
    }
    componentDidMount = () => {
        try {
            let json = localStorage.getItem('options');
            let options = JSON.parse(json);
        if (options) {
            this.setState(() => {
                return {
                    options: options
                }
            })
        }
        } catch (e) {

        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            let json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    clearSelectOption = () => {
        this.setState(() => ({
            selectOption: undefined
        }))
    }
    render() {
        let title = "To do app",
            subTitle = "First React App";
        return (
        <div className="app-group">
            <Header title={title} subTitle={subTitle}/>
            
            <Options removeAllOptions={this.removeAllOptions} optionIsHere={this.state.options.length === 0} isHere={this.state.options.length === 0 ? 'No option is here': 'Option is here' } oprnModal={this.openModal} option={this.state.options} />

            {/* <Options removeAllOptions={this.removeAllOptions} optionIsHere={this.state.options.length === 0} isHere={this.state.options.length === 0 ? 'No option is here': 'Option is here' } removeSingleOption={this.removeSingleOption} option={this.state.options} /> */}

            <Form addOption={this.addOption} />
            <OptionsModal selectOption={this.state.selectOption} clearSelectOption={this.clearSelectOption} />
        </div>
        );
    }
};

  export default MyApp;