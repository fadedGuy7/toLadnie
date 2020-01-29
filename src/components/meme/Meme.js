import React, { Component } from 'react';
import { connect } from 'react-redux'
import { likeMeme, dislikeMeme } from '../../store/actions/memeActions'
import { Link } from 'react-router-dom'
import LikeBarMeme from './LikeBarMeme'

const showUp = ( array ) => {
    let result = '';
    array && array.map((el) => {
        result += '#' + el.tag + ' '
        return result
    })
    return result;
}

const Title = (props) =>{
    if(props.meme.id) {
        return (
            <Link to={'/meme/' + props.meme.id} key={'linktitle' + props.meme.id}>
                {props.meme.title}
            </Link> 
        )
    } else {
        return (
            <span>
                {props.meme.title}
            </span>
        );
    }
}

const Body = (props) => {
    if(props.meme.id) {
        return (
            <Link to={'/meme/' + props.meme.id} key={'link' + props.meme.id}>
                <img src={props.meme.meme} alt={props.meme.title} className='responsive-img z-depth-0 memeImg' />
            </Link>
        )
    } else {
        return (
            <span>
                <img src={props.meme.meme} alt={props.meme.title} className='responsive-img z-depth-0 memeImg' />
            </span>
        );
    }
}

class Meme extends Component {

    render() {
        const { votes } = this.props;
        const id = this.props.id ? this.props.id : this.props.meme.id;
        console.log('RENDER MEME');
        return(
            <div className='meme blueGrey text m8 s12 z-depth-1'>
                <div className='transparent text memeTitle'>
                    <Title {...this.props}/>
                </div>
                <div className='toSides blueGrey dBrownText darken-1 memeInfo'>
                    <p className='info'>{this.props.meme.type}</p>
                    <p className='info'>{showUp(this.props.meme.hashTag)}</p>
                </div>
                <div className='memeContent'>
                    <Body {...this.props}/>
                </div>
                 <div className='transparent underMeme'>
                    <LikeBarMeme meme={id} likeMeme={this.props.likeMeme} dislikeMeme={this.props.dislikeMeme} />
                 </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeMeme: (id) => dispatch(likeMeme(id)),
        dislikeMeme: (id) => dispatch(dislikeMeme(id))
    }
}

const mapStateToProps = (state, props) => {  
    const id = props.meme.id ? props.meme.id : props.id;
    const votes = state.firestore.ordered.meme;
    return {
        id: id,
        votes: votes
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Meme);


