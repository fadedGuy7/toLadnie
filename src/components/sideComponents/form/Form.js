import React from 'react'
import { fireEvent } from '@testing-library/dom'

  ///////////////////////////////////////////////////////
 ///                 SELECT BOX                      ///
///////////////////////////////////////////////////////


class Select extends React.Component {
    
    componentDidMount() {
//###        const handChange = (val) => {
  //          this.props.handleChange(val);
    //    }
        let selectContainer = document.getElementsByClassName('selectContainer');
        for (let i = 0; i < selectContainer.length; i++) {
            let selectedElem = selectContainer[i].getElementsByTagName('select')[0];
            // create div that will act as selected item
            let selected = document.createElement('div');
            selected.className = 'selectSelected';
            selected.innerHTML = selectedElem.options[selectedElem.selectedIndex].innerHTML;  // display choosen val in new created div
            selectContainer[i].appendChild(selected);
            // create div that act as options list
            let optionsList = document.createElement('div');
            optionsList.className = 'selectItems selectInvisible';
            // and each position
            for (let j = 0; j < selectedElem.length; j++) {
                let option = document.createElement('div');
                option.innerHTML = selectedElem[j].text;
                option.addEventListener('click', function(event) {
                    let select = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    select.onChange = ( event ) => console.log('klikniete', event)
                    let selected = this.parentNode.previousSibling;  // get sibling div ( what act as selected )
                    for (let i = 0; i < select.length; i++) {
                    if (select.options[i].innerHTML === this.innerHTML) {
                        select.selectedIndex = i;       // setup .selectedIndex value for future use
                        //### handChange(select[i].value);
                        console.log(select)


                        selected.innerHTML = this.innerHTML;
                        let clicked = this.parentNode.getElementsByClassName("darken"); 

                        for (let k = 0; k < clicked.length; k++) {      // clear style for previously choosen position on the list..
                            clicked[k].removeAttribute("class");
                        }
                        this.className = "darken";  // .. and set it for new one
                        break;
                    }
                    }
                    selected.click();
                });
                optionsList.appendChild(option);
            }
            selectContainer[i].appendChild(optionsList);
            selected.addEventListener("click", function(event) { // when click on select box close the other ones currently open, open/close current one
                event.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("selectInvisible");
                this.classList.toggle("selectArrowDown");
              });
        }
            function closeAllSelect(elmnt) {        // function that close all other select boxes
                let arrNo = [];
                let selectItems = document.getElementsByClassName("selectItems");
                let selectSelected = document.getElementsByClassName("selectSelected");
                for (let i = 0; i < selectSelected.length; i++) {
                if (elmnt === selectSelected[i]) {
                    arrNo.push(i)
                } else {
                    selectSelected[i].classList.remove("select-arrow-active");
                }
                }
                for (let i = 0; i < selectItems.length; i++) {
                if (arrNo.indexOf(i)) {
                    selectItems[i].classList.add("selectInvisible");
                }
                }
            }

        document.addEventListener("click", closeAllSelect);     // close select box if clicked somewhere out of the box
    }
    render() {
        
        return (
            <div className='selectContainer'>
                <select value={this.props.value} onChange={(e) => console.log('onChange', e)}>
                    { this.props.children ? this.props.children : <option value='default'>Default position</option> }
                </select>
            </div>
          );
    }
}

  ///////////////////////////////////////////////////////
 ///                 INPUT TEXT                      ///
///////////////////////////////////////////////////////

const InputText = (props) => {
    const {label, id, value} = props;
    return(
        <div className="inputArea">      
            <input type="text" className='browser-default dBrownText' onChange={props.onChange} id={id} value={value} required/>
            <span className="bar"></span>
            <label>{label}</label>
        </div>
    )
}


  ///////////////////////////////////////////////////////
 ///                 INPUT FILE                      ///
///////////////////////////////////////////////////////


class InputFile extends React.Component {
    componentDidMount() {
        var W3CDOM = (document.createElement && document.getElementsByTagName);  // check if browser support W3C DOM
        let label = this.props.label;
        function initFileUploads() {
            if (!W3CDOM) return;
            var fakeFileUpload = document.createElement('div');
            fakeFileUpload.className = 'fakeFile';
            let left = document.createElement('div');
            left.className = 'fileLeft';
            let right = document.createElement('div');
            right.className = 'fileRight';

            fakeFileUpload.appendChild(left);
            fakeFileUpload.appendChild(right);

            let textField = document.createElement('input');
            textField.type = 'text';
            textField.className = 'browser-default dBrownText fileInput';
            right.appendChild(textField);

            var button = document.createElement('div');
            button.className = 'fileButton';
            button.innerHTML = label;
            left.appendChild(button);
            
            var x = document.getElementsByTagName('input');
            for (var i=0;i<x.length;i++) {
                if (x[i].type !== 'file') continue;
                if (x[i].parentNode.className !== 'inputFile') continue;
                x[i].className = 'file';
                var clone = fakeFileUpload.cloneNode(true);
                x[i].parentNode.appendChild(clone);
                x[i].relatedElement = clone.getElementsByTagName('input')[0];
                x[i].onchange = x[i].onmouseout = function () {
                    this.relatedElement.value = this.value;
                }
                fakeFileUpload.onclick = function () {
                    x[i].click()
                }
            }
        }
       initFileUploads(); 
    }
    render() {

        return(
            <div className="inputFile">
	            <input type="file" onChange={this.props.onChange} id={this.props.id} value={this.props.value} className="file" ref={this.props.ref}/>
            </div> 
        )
    }
}


export { Select, InputText, InputFile };