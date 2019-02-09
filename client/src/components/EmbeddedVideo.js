import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class EmbeddedVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
            vertical: 'bottom',
            horizontal: 'left',
        }
    }
    close = () => {
        this.setState({
            open: false
        });
    };
    render() {
        const { vertical, horizontal } = this.state;
        const { open } = this.props;
        return (
            <Snackbar id="snackbar"
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">I love snacks</span>}
            >
                <iframe id="ytplayer" type="text/html" width="650" height="360"
                src={`https://www.youtube.com/embed/${this.props.video.key}?autoplay=1`}
                frameBorder="0"></iframe>
            </Snackbar>
        )
    }
}

export default EmbeddedVideo;