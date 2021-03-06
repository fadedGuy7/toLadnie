import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../../store/actions/memeActions';
import { Redirect } from 'react-router-dom'
import M from 'materialize-css';
import { Chip, TextInput, Icon, Col, Preloader } from 'react-materialize'
import '../../index.css';
import $ from 'jquery'
import { getFirebase } from 'react-redux-firebase';
import { Select, InputText, InputFile } from '../sideComponents/form/Form'

import 'firebase/storage';

export class CreateMeme extends Component {
    state = {
        title: '',
        meme: '',
        type: '',
        hashTag: [],
        memeStatus: 0
    }

    handleChange = (e) => {
        console.log('tyrtrtrtr', e);
        if(e.target.type === 'file') {
            let firebase = getFirebase();
            const storageRef = firebase.storage().ref();
            const meme = e.target.value;
            const memeRef = storageRef.child(meme);
            const file = e.target.files[0];
            this.setState({
                memeStatus: 1
            }, () => {
                memeRef.put(file).then((snapshot) => {
                    memeRef.getDownloadURL().then((url) => {
                        this.setState({
                            meme: url,
                            memeStatus: 2
                        })
                    })
                }).catch((error) => {
                    this.setState({ memeStatus: 3 });
                });

            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            }, () => {
                console.log(this.state);
            })
        }
    }

    handleChip = (e) => {
        let chips = M.Chips.getInstance($('.chips')).chipsData;  //getting data from chip elemenet           
        this.setState({
            hashTag: chips
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createMeme(this.state);
         this.props.history.push('/');  //redirect user to '/' page   
    }
    

    
   render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/zaloguj' />

        const LoadingStatus = () => {
            if(this.state.memeStatus === 1) {
                           return <Col s={4}>
                           <Preloader
                             active
                             color="blue"
                             flashing={false}
                             size="small"
                           />
                         </Col>   
            } else if(this.state.memeStatus === 2) {
                return <p className='green-text'>Grafika zaladowana!</p>
            } else if(this.state.memeStatus === 3) {
                return <p className='red-text'>Grafika nie została załadowana, spróbuj ponownie.</p>
            }
            return false
        }

        
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='blueGrey'>
                    <InputText id='title' label='Tytuł wrzutki' onChange={this.handleChange} value={this.state.title} />
                    <Select handleChange={this.handleChange} value={this.state.type} id='type' >
                        <option value=''>Typ wrzutki</option>
                        <option value='humor'>Humor</option>
                        <option value='ciekawostka'>Ciekawostka</option>
                        <option value='historyczne'>Historyczne</option>
                    </Select>

                    <div className='input-field'>
                    <Chip
                        close={false}
                        closeIcon={<Icon className="close">close</Icon>}
                        id='hashTag'
                        options={{
                            placeholder: 'Tag > enter',
                            secondaryPlaceholder: '(max. 8)',
                            limit: 8,
                            onChipAdd: this.handleChip,
                            onChipDelete: this.handleChip,
                            data: this.state.hashTag
                        }} 
                        className='nBlueText'/>
                    </div>
                    
                    <div className='input-field'>
                        {/*<TextInput type='file' label='Zapodaj mema' id='meme' onChange={this.handleChange} ref={this.setRef} />*/}
                        <InputFile label='Zapodaj mema' id='meme' onChange={this.handleChange} ref={this.setRef}/>

                        <LoadingStatus />
                    </div>
                    <button className='customButton'>Dodaj</button>

                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth   //comment in dashboard.js
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMeme: (meme) => dispatch(createMeme(meme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeme);