import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Pricing Tables"
          titleText={`Choose Pricing Plans Which \n Suits Your Needs`}
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Paid
            </a>
          </li>
          <li>
            <label
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              Free
            </a>
          </li>
        </ul>
        {plan === true ? (
          <div id="yearly">
            <Row>
              
           
             
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Free</p>
                    <h3>₹0</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Basic features</li>
                      <li>Limit 15 Members</li>
                      <li>Upgrade Option</li>
                      <li>Limited Features</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Bronze</p>
                    <h3>₹200</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Upto 50 Members</li>
                      <li>Free Support</li>
                      <li>Free In App Messages</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Silver</p>
                    <h3>₹500</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Upto 200 Members</li>
                      <li>Lifetime free support</li>
                      <li>Multiple Events</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Gold</p>
                    <h3>₹999</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Super User</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
