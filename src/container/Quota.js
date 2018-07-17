import React from "react";
import * as Bootstrap from 'reactstrap';
import api from '../api/api-quota';
import QuoteText  from "../components/QuoteText";
import QuoteAuthor from "../components/QuoteAuthor";

export default class Quota extends React.Component {
    state = {
        text: "",
        author: ""
    }

    handleNewQuota() {
        api.get().then(({ data, status }) => {
            this.setState({
                author: data[0].title,
                text: data[0].content
            })
        })
    }

    handleTweetQuota() {

    }

    componentDidMount() {
        this.handleNewQuota();
    }

    render() {
        return (
            <Bootstrap.Container id={"quote-box"} >
                <Bootstrap.Row>
                    <Bootstrap.Jumbotron className={"jumbotron-fluid"}>
                        <QuoteText text={this.state.text} />
                        <QuoteAuthor text={this.state.author} />
                    </Bootstrap.Jumbotron>
                </Bootstrap.Row>
                <Bootstrap.Row>
                    <Bootstrap.ButtonToolbar>
                        <Bootstrap.Button onClick={(e) => this.handleNewQuota(e)} id={"new-quote"} bsstyle={"primary"} text={"New Quota"} > new Quota</Bootstrap.Button>
                        <Bootstrap.PaginationLink href={"twitter.com/intent/tweet"} onClick={(e) => this.handleTweetQuota(e)} id={"tweet-quote"} bsstyle={"info"} text={"Tweet Quota"} >tweet Quota</Bootstrap.PaginationLink>
                    </Bootstrap.ButtonToolbar>
                </Bootstrap.Row>
            </Bootstrap.Container>
        )
    }
}