import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class EmbeddedVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openError: true,
            openTrailer: false,
            vertical: 'bottom',
            horizontal: 'left',
        }
        this.closeError = this.closeTrailer.bind(this);
        this.openError = this.closeTrailer.bind(this);
        this.closeTrailer = this.closeTrailer.bind(this);
        this.openTrailer = this.openTrailer.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        // Open trailer snackbar if there is a video
        if (nextProps.openTrailer) {
            this.openTrailer();
        } else if (nextProps.openError) {
            this.openError();
        }
    }
    openTrailer() {
        this.setState({
            openTrailer: true
        })
    }
    closeTrailer() {
        this.setState({
            openTrailer: false
        });
    }
    openError() {
        this.setState({
            openError: true
        });
        console.log("ERROR")
    }
    closeError() {
        this.setState({
            openError: false
        });
    }
    render() {
        const { vertical, horizontal } = this.state;
        // Movie trailer snackbar
        if (this.props.video !== undefined) {
            return (
                <Snackbar id="snackbar"
                anchorOrigin={{ vertical, horizontal }}
                open={this.state.openTrailer}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                message={<span id="message-id">Trailer</span>}
                >
                <div className="trailer">
                    <Button onClick={this.closeTrailer} variant="contained">
                        <CloseIcon />
                    </Button>
                    <iframe title="ytplayer" id="message-id" type="text/html" width="650" height="350" allow="autoplay; fullscreen"
                    src = {
                        this.props.video.key !== undefined ? `https://www.youtube.com/embed/${this.props.video.key}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1` : ''
                    }
                    frameBorder="0"></iframe>
                </div>
                </Snackbar>
            )
        } else {
            // Error snackbar
            return (
                <Snackbar id="error-snackbar"
                anchorOrigin={{ vertical, horizontal }}
                open={this.state.openError}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'error-id'
                }}
                message={<span id="error-id">No Video Available <WarningIcon /></span>}>
                </Snackbar>
            )
        }
    }
}

export default EmbeddedVideo;