function Lists(props) {
    return (
        <ol>
            {(props === undefined) ? "" : props.mapdata}
        </ol>
    )
};

export default function ParentLists() {
    const arrayLists = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    // const arrayLists  = [{a: 1}, {a: 2}]
    const listitem = arrayLists.map((obj, i) => <li key={i}>{obj}</li>);
    return (
        <div>
            <h2>Lists</h2>
            <Lists mapdata={listitem} />
            {/* <ul>
                {arrayLists.map((obj, i) => (
                    <li key={obj}>{obj}</li>
                ))}
            </ul> */}
            {/* <ol>
                {listitem}
            </ol> */}
        </div>
    )
} 
