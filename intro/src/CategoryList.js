import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    //state = bir componentin datasıdır.
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { categoryId: 1, categoryName: "Beverages" },
                { categoryId: 2, categoryName: "Condiments" }
            ]
        };
    }


    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3> {/* this.props.title = App.js den info={categoryInfo} olarak gönderdik burda çağırdık. /> */}
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>

            </div>
        )
    }
}
