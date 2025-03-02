import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';

function App() {
  //props = bir componentden diğerine data taşıma yöntemi.
  let categoryInfo = { title: "Category List" }
  let productInfo = { title: "Product List" }

  //state = bir componentin datasıdır.

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            {/* CategoryList.js den title ile çağrılacak. */}
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
