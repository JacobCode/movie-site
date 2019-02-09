import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class EmbeddedVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vertical: 'bottom',
            horizontal: 'left',
        }
        this.closeTrailer = this.closeTrailer.bind(this);
        this.openTrailer = this.openTrailer.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.open === true) {
            this.openTrailer();
        }
    }
    openTrailer() {
        this.setState({
            open: true
        })
    }
    closeTrailer() {
        this.setState({
            open: false
        });
    }
    render() {
        const { vertical, horizontal } = this.state;
        return (
            <Snackbar id="snackbar"
            anchorOrigin={{ vertical, horizontal }}
            open={this.state.open}
            onClose={this.handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
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
    }
}

export default EmbeddedVideo;