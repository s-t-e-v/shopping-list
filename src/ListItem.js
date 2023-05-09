import './ListItem.css';

function ListItem({text}) {

    return (
        <div>
            <input type="text" readOnly value={text} className="item-text" />
            <button className="btn-del">X</button>
        </div>
    );
}

export default ListItem;