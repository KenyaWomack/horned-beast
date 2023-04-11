import React from 'react';
class Main extends React.Component {
    render () {
        return (
            <>
                <HornedBeast title="Rumbling Terahorn" imageURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQpKfYGCq92HDvz8Oha8Y7oa9ToaN7DzeIsVOrd3Pzw&s"} description={"When you put this creature into the battle zone, search your deck. You may take a creature from your deck, show that creature to your opponent, and put it into your hand. Then shuffle your deck."} />
                <HornedBeast title="Jackaleo" imageURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sJ66AYrJxndk-S6OFBX9XN5lTLIBH-8EiVNp1QmI4w&s"} description={"Jackaleo is a Danger Beast species shown in Akame Ga Kill!. The Jackaleo possess big horns that grow from the side of their heads onward."}/>
            </>
        )
    }
}
class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}
export default Main;