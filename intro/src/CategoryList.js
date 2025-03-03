import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    //state = bir componentin datasıdır.
    state = {
        categories: [
            { categoryId: 1, categoryName: "Beverages" },
            { categoryId: 2, categoryName: "Condiments" }
        ]
    };

    render() {
        return (
            <div>

                <h3>{this.props.info.title}</h3> {/* this.props.title = App.js den info={categoryInfo} olarak gönderdik burda çağırdık. /> */}

                <ListGroup>
                    {/* category = her döngüde listenin elamanına verdiğimiz isim. 1. döngüde id=1 name=Beverages olana verilen isim. İkinci döngüde id=2 name=Condiments olana verilen isim. Yani listenin her bir elemanının ismi. */}
                    {this.state.categories.map(category => (
                        // categoryi döndür herbiri için listgroupitem oluştur dedim.
                        <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>

            </div>
        )
    }
}
