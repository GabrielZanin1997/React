import React, { Component } from 'react'

export default class Repository extends Component {
    async compnonentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        console.log(repoName);
    }
    render() {
        return <h1>Repository</h1>;
    }
}
