import React from 'react';

import {connect} from 'react-redux';

const child = (props) => {
    return (
        <div>
            <button onClick={props.handlClick.bind(this,props.doWhatever)}>{props.title}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      title: state.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlClick: (type) => dispatch({type: type})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(child);