//Example 1
function hello(){
    console.log("HI");
    /** this refers to the window 
     * (global scope object in the browser 
     * */
    console.log(this);
}
 
//Example 2
const person1 = {
    first: "Ron",
    last: "Harper",
    nickName: "Harp",
    fullName(){
        const {
            first,
            last,
            nickName
        } = this;
        console.log(`${first} ${last} the ${nickName}`);
    }
}