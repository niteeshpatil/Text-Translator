import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Translate() {
  return (
    <div>
      <div className="app-header">
        <h2>Text-Translater</h2>
      </div>
      <div className="app-body">
        <Form>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="Type Text to Translate.."
                style={{ height: "200px", width: "400px", margin: "5px" }}
              />
            </Col>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="Translation"
                style={{ height: "200px", width: "400px", margin: "5px" }}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Row>
                <Col></Col>
                <Col>
                  <Form.Select
                    aria-label="Select Language"
                    style={{ padding: "5px" }}
                  >
                    <option>Select Language</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Button variant="success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-translate"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                </svg>
                Translate
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
