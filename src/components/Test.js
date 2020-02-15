import React from 'react'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    componentDidMount() {
        let selectDiv = document.getElementsByClassName('selectDiv');
        for (let i = 0; i < selectDiv.length; i++) {
            let selectedElem = selectDiv[i].getElementsByTagName('select')[0];
            console.log(selectedElem)
            // create div that will act as selected item
            let selected = document.createElement('div');
            selected.class = 'selectSelected';
            selected.innerHTML = selectedElem.options[selectedElem.selectedIndex].innerHTML;  // display in new created div that what is actually choosen in select list
            selectDiv[i].appendChild(selected);
            // create div that act as options list
            let optionsList = document.createElement('div');
            optionsList.class = 'selectItems selectInvisible';
            // and each position
            for (let j = 0; j < selectedElem.length; j++) {
                let option = document.createElement('div');
                option.innerHTML = selectedElem[j].text;
                console.log(option + ' dopisuje ' + selectedElem[j].text)
                option.onClick = (event) => {

                }

                optionsList.appendChild(option);
            }
            selectDiv[i].appendChild(optionsList)
        }

    }
    render() {
        
        return (
            <div className='selectDiv'>blah
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="default">Choose your option you little piece of shit</option>
                    <option value="first">Option 1</option>
                    <option value="second">Option 2</option>
                    <option value="third">Option 3</option>
                </select>
            </div>
          );
    }
}


const Test = () => {
    return(
            <form className='browser-default blueGrey text'>
                <h2>Login</h2>
                <div className="inputArea">      
                    <input type="text" className='browser-default dBrownText' required />
                    <span className="bar"></span>
                    <label>Name</label>
                </div>
                    
                <div className="inputArea">      
                    <input type="text" className='browser-default dBrownText' required />
                    <span className="bar"></span>
                    <label>Email</label>
                </div>
                <input type='text' className='dBrownText'></input>
                <button>Zaloguj</button>
                <span className="buttonBar"></span>

                <Select />

                
            </form>

    )
}

export default Test