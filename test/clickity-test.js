import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";

import ClickityClick from "../src/components/ClickityClick";

Enzyme.configure({ adapter: new Adapter() });

describe("<ClickityClick />", () => {
  const wrapper = shallow(<ClickityClick />);

  it("exists", () => {
    expect(wrapper.length).to.equal(1);
  });
});
