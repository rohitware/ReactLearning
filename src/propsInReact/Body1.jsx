import Body11 from "./Body11";

const Body1 = (props) => {

    let person = {
        name: "John",
        age: 30,
        city: "New York"
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    

    return (
        <>
            <h1>Inside Body1</h1>
        
            <Body11 msg={props.mesg} personObj={person} arrVal={arr} />
        </>
    )

}

export default Body1;
