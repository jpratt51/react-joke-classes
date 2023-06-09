import React from "react";
import "./Joke.css";

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.downVote = this.downVote.bind(this);
        this.upVote = this.upVote.bind(this);
    }

    downVote() {
        this.props.vote(this.props.id, -1);
    }

    upVote() {
        this.props.vote(this.props.id, +1);
    }

    render() {
        const { text, votes } = this.props;
        return (
            <div className="Joke">
                <div className="Joke-votearea">
                    <button onClick={this.upVote}>
                        <i className="fas fa-thumbs-up" />
                    </button>

                    <button onClick={this.downVote}>
                        <i className="fas fa-thumbs-down" />
                    </button>

                    {votes}
                </div>

                <div className="Joke-text">{text}</div>
            </div>
        );
    }
}

export default Joke;
