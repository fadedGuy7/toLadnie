import React from 'react'
import moment from 'moment';
import AddComment from './AddComment';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        let commentTo = this.props.comments ? this.props.comments.filter(val => val.toComment === this.props.comment.id) : null;
        console.log('test dla ', this.props.comment.comment, this.props.comments);
        return(
            <div className='blueGrey comments z-depth-1'>
                <div className='toSides commentTitle'>
                    <span className=''>{this.props.comment.commentAuthorFirstName}</span>
                    <span className='time'>{moment.unix(this.props.comment.commentDate.seconds)
                                                  .startOf('minute').fromNow()}</span>
                </div>
                <div className='toSides'> 
                    <div className='blueGrey comment'>
                        <span>{this.props.comment.comment}</span>
                    </div>
                    <div className='commentExtras'>
                        { /* <p onClick={() => { this.setState({ visible: !this.state.visible })}}>Odpowiedz</p> */ }
                        <p onClick={() => { this.props._mkVis(this.props.comment.id) }}>Odpowiedz</p>
                    </div>
                </div>
                {/*console.log('porwonanieeee ', this.props.visible, this.props.comment.id, this.props.visible === this.props.comment.id) */}
                <div className={this.props.visible === this.props.comment.id ? 'visible' : 'invisible'}>
                    <AddComment id={this.props.comment.memeId} toComment={this.props.comment.id} _mkVis={this.props._mkVis} />

                </div>
                
                {commentTo && commentTo.length > 0 ?        // check if there is comment to comment, if so display it
                    (
                    commentTo.map((comment) => { 
                            return <Comment key={comment.id} comment={comment} comments={this.props.comments} visible={this.props.visible} _mkVis={this.props._mkVis}/> 
                    }))
                : null }                
            </div>
        );
    }
}
    

export default Comment;
