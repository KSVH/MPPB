import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  InputGroupButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";
import "./panier.css";

const Panier = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <Container className="b">
        <p>Panier</p>
        <div className="af-line"></div>
        <div className="d-flex justify-content-center mt-5">
          <Col lg={10} className="af-border-black">
            <Row>
              <Col lg={3} className="p-1">
                <div className="af-fruit"></div>
              </Col>
              <Col lg={6}>
                <p className="af-bold af-psize24">Tomate Grappe</p>
                <p className="mt-3 af-psize18 af-color-green">De Lionel Gaspar / Fermes des landes</p>
                <Row>
                  <Col lg={4}>
                    <div className="mt-5">
                      <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                        <DropdownToggle caret>Quantités : 3</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>1</DropdownItem>
                          <DropdownItem>2</DropdownItem>
                          <DropdownItem>3</DropdownItem>
                        </DropdownMenu>
                      </InputGroupButtonDropdown>
                    </div>
                  </Col>
                  <Col lg={6} className="mt-5">
                    <Button color="danger">Supprimer</Button>{" "}
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <Col lg={12} className="p-0">
                  <div className="d-flex justify-content-end">
                    <p className="mt-1 af-bold af-psize24">3,49$</p>
                  </div>
                </Col>
                <Col lg={12} className="p-0">
                  <div className="d-flex justify-content-end">
                    <p className="mt-1 af-psize18">La pièce</p>
                  </div>
                </Col>
                <Col lg={12} className="p-0 mt-5">
                  <div className="d-flex justify-content-end">
                    <Row>
                      <p className="af-psize24">Sous-total :</p>
                      <p className="af-psize24 bold ml-2 mr-2">3,49$</p>
                    </Row>
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Col lg={10} className="af-border-black">
            <Row>
              <Col lg={3} className="p-1">
                <div className="af-fruit"></div>
              </Col>
              <Col lg={6}>
                <p className="af-bold af-psize24">Tomate Grappe</p>
                <p className="mt-3 af-psize18 af-color-green">De Lionel Gaspar / Fermes des landes</p>
                <Row>
                  <Col lg={4}>
                    <div className="mt-5">
                      <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                        <DropdownToggle caret>Quantités : 3</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>1</DropdownItem>
                          <DropdownItem>2</DropdownItem>
                          <DropdownItem>3</DropdownItem>
                        </DropdownMenu>
                      </InputGroupButtonDropdown>
                    </div>
                  </Col>
                  <Col lg={6} className="mt-5">
                    <Button color="danger">Supprimer</Button>{" "}
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <Col lg={12} className="p-0">
                  <div className="d-flex justify-content-end">
                    <p className="mt-1 af-bold af-psize24">3,49$</p>
                  </div>
                </Col>
                <Col lg={12} className="p-0">
                  <div className="d-flex justify-content-end">
                    <p className="mt-1 af-psize18">La pièce</p>
                  </div>
                </Col>
                <Col lg={12} className="p-0 mt-5">
                  <div className="d-flex justify-content-end">
                    <Row>
                      <p className="af-psize24">Sous-total :</p>
                      <p className="af-psize24 bold ml-2 mr-2">3,49$</p>
                    </Row>
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Col lg={5}>
            <div className="d-flex justify-content-center">
              <p>(Code promotionnel)</p>
            </div>
            <Col lg={12}>
              <Input />
            </Col>
            <div className="d-flex justify-content-center mt-2">
              <Button color="success">VALIDER</Button>{" "}
            </div>
          </Col>
          <Col lg={5} className="p-0">
            <div className="d-flex justify-content-end">
              <div className="af-separateur" />
            </div>
            <div className="d-flex justify-content-end">
              <Col lg={4}>
                <p className="mt-2 af-psize24">Sous-total :</p>
              </Col>
              <p className="mt-2 af-bold ml-2 af-psize24">8,45$</p>
            </div>
            <div className="d-flex justify-content-end">
              <div className="af-separateur" />
            </div>
            <div className="d-flex justify-content-end">
              <Col lg={4}>
                <p className="mt-2 af-psize24">TVA :</p>
              </Col>
              <p className="mt-2 af-bold ml-2 af-psize24">2,20$</p>
            </div>
            <div className="d-flex justify-content-end">
              <div className="af-separateur" />
            </div>
            <div className="d-flex justify-content-end">
              <Col lg={4}>
                <p className="mt-2 af-psize24 af-bold">TOTAL :</p>
              </Col>
              <p className="mt-2 af-bold ml-2 af-psize24">34,99$</p>
            </div>
            <div className="d-flex justify-content-end">
              <Button color="info">VALIDER LA COMMANDE</Button>{" "}
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Panier;
