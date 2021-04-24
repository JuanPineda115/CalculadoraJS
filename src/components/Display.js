import React, {Component} from 'react';

class Display extends Component {
    render(){
        return(
            <div data-testid="calcDisplay" className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;