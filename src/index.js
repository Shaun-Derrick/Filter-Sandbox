import React from "react";
import ReactDOM from "react-dom";
// import { Container, Dropdown } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import Example from "./Example";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

// import DropdownExampleMultipleSelection from "./Example";

const App = () => {
  return (
    <div className="overrideCss">
      <Container style={{ margin: 20 }}>
        {/* <Dropdown>
          <Dropdown.Divider>
            <Dropdown.Header>
              <Dropdown.Item>
                <Dropdown.Menu>
                  <Dropdown.Text> */}
        <Example />
        {/* </Dropdown.Text>
                </Dropdown.Menu>
              </Dropdown.Item>
            </Dropdown.Header>
          </Dropdown.Divider>
        </Dropdown> */}
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
