import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

// https://www.digitalocean.com/community/tutorials/react-tabs-component

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <main className="tabs w-6/12">
        <h2>
          Explore the Great Unknown with us
        </h2>
        <ol className="tab-list mt-6 text-center">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content pt-6">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </main>
    );
  }
}

export default Tabs;
