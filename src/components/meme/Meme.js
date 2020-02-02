import React, { Component } from 'react';
import { connect } from 'react-redux'
import { likeMeme, dislikeMeme } from '../../store/actions/memeActions'
import { Link } from 'react-router-dom'
import LikeBarMeme from './LikeBarMeme'

const showUp = ( array ) => {
    let result = '';
    array && array.forEach((el) => {
        result += '#' + el.tag + ' '
        return result
    })
    return result;
}

class Meme extends Component {
    render() {
        console.log('RENDER MEME');
        return(
            <div className='meme blueGrey text m8 s12 z-depth-1'>
                <div className='transparent text memeTitle'>
                    {this.props.redirect ? (
                        <Link to={'/meme/' + this.props.meme.id} key={'linktitle' + this.props.meme.id}>
                            {this.props.meme.title}
                        </Link>
                    ) : (
                        <React.Fragment>
                            {this.props.meme.title}
                        </React.Fragment>
                    )}
                </div>
                <div className='toSides blueGrey dBrownText darken-1 memeInfo'>
                    <p className='info'>{this.props.meme.type}</p>
                    <p className='info'>{showUp(this.props.meme.hashTag)}</p>
                </div>
                <div className='memeContent'>
                    {this.props.redirect ? (
                        <Link to={'/meme/' + this.props.id} key={'link' + this.props.id}>
                            <img src={this.props.meme.meme} alt={this.props.meme.title} className='responsive-img z-depth-0 memeImg' />
                        </Link>
                    ) : (
                        <React.Fragment>
                            <img src={this.props.meme.meme} alt={this.props.meme.title} className='responsive-img z-depth-0 memeImg' />
                        </React.Fragment>
                    )}
                </div> 
                 <div className='transparent underMeme'>
                    <LikeBarMeme id={this.props.id} likeMeme={this.props.likeMeme} dislikeMeme={this.props.dislikeMeme} />
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
    return {
        id: props.meme.id
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Meme);


