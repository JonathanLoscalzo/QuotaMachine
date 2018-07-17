import React from "react";
import * as Bootstrap from 'reactstrap';
import api from '../api/api-quota';
import QuoteText from "../components/QuoteText";
import QuoteAuthor from "../components/QuoteAuthor";

export default class Quota extends React.Component {
    state = {
        text: "",
        author: ""
    }

    handleNewQuota() {
        api.get().then(({ data, status }) => {
            this.setState({
                author: data[0].author,
                text: data[0].quote
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
            <div id={"quote-box"} >
                <div className="container">
                    <Bootstrap.Jumbotron className={"jumbotron-fluid"}>
                        <Bootstrap.Container>
                            <React.Fragment >
                                <QuoteText text={this.state.text} />
                                <QuoteAuthor text={this.state.author} />
                            </React.Fragment>
                            <hr className="my-4" />
                            <Bootstrap.ButtonToolbar>
                                <Bootstrap.Button onClick={(e) => this.handleNewQuota(e)} id={"new-quote"} bsstyle={"primary"} text={"New Quota"} > new Quota</Bootstrap.Button>
                                <Bootstrap.PaginationLink href={"twitter.com/intent/tweet"} onClick={(e) => this.handleTweetQuota(e)} id={"tweet-quote"} bsstyle={"info"} text={"Tweet Quota"} >tweet Quota</Bootstrap.PaginationLink>
                            </Bootstrap.ButtonToolbar>
                        </Bootstrap.Container>
                    </Bootstrap.Jumbotron>
                </div>
            </div>
        )
    }
}