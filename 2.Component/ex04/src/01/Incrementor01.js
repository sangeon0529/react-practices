import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments); //...은 여러개가 들어올 수 있다.
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton(e) {
        this.setState({
            val: this.state.val + this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}