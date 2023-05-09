

function ListItem({text}) {

    return (
        <div>
            <input type="text" readOnly value={text} className="item-txt" />
            <button className="btn-del">X</button>
        </div>
    );
}

export default ListItem;