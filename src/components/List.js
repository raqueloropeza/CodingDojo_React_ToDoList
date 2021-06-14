import React from 'react';
import styles from './Checklist.module.css';


const List = (props) => {
    const {list, setList} = props;

    const onDeleteHandler = (key) => {
        console.log(key);
        setList([...list.slice(0, key), ...list.slice(key+1)]);
    }

    const onChangeHandler = (key) => {
        let checkedItem = {value: list[key].value, isChecked:!list[key].isChecked }
        setList([...list.slice(0, key), checkedItem, ...list.slice(key+1)])
    }

    return (
        <div className= "container">
            <ul className="list-group">
            {
                list.map((item, key) =>{return(
                    <li className= "row">
                        <div className="col-sm-4" >
                            <input className= "form-check-input me-1 " type="checkbox" onClick={() =>onChangeHandler(key)} checked={item.isChecked} value={item.value} key={key} aria-label="..."></input>
                                <span className={item.isChecked ? `${styles.strikethrough}`: `${styles.unchecked}`} > {item.value} </span>
                        </div>
                        <div className="col-sm-4">
                            <button className= {styles.button} onClick={() =>onDeleteHandler(key)}>Delete</button>
                        </div>
                    </li>)
                })
            }
            </ul>
        </div>
    )
    
}

export default List; 