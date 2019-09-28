import React, { Component } from "react";
import PropTypes from "prop-types";
import { defaultState } from "react-input-position";
import utils from "./utils";
import MagnifierZoom from "./MagnifierZoom";
import MagnifierPreview from "./MagnifierPreview";

class MagnifierContainer extends Component {
  state = {
    inputPositionState: defaultState,
    zoomImageDimensions: {},
    zoomContainerDimensions: {}
  };
  zoomContainerRef = React.createRef();

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  };

  componentDidMount() {
    this.getZoomContainerDimensions();
    window.addEventListener("resize", this.getZoomContainerDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getZoomContainerDimensions);
  }

  getZoomContainerDimensions = () => {
    if (!this.zoomContainerRef.current) {
      return;
    }
    const {
      width,
      height
    } = this.zoomContainerRef.current.getBoundingClientRect();

    this.setState({
      zoomContainerDimensions: {
        width,
        height
      }
    });
  };

  onUpdate = changes => {
    this.setState({ inputPositionState: changes });
  };

  onZoomImageLoad = e => {
    const rect = e.target.getBoundingClientRect();

    this.setState({
      zoomImageDimensions: {
        width: rect.width,
        height: rect.height
      }
    });
  };

  decorateChild(child, positionProps) {
    if (child.type === MagnifierPreview) {
      return React.cloneElement(child, {
        stateOverride: this.state.inputPositionState,
        onUpdate: this.onUpdate,
        zoomImageDimensions: this.state.zoomImageDimensions,
        ...positionProps
      });
    }

    if (child.type === MagnifierZoom) {
      return React.cloneElement(child, {
        ...this.state.inputPositionState,
        zoomImageDimensions: this.state.zoomImageDimensions,
        zoomContainerDimensions: this.state.zoomContainerDimensions,
        zoomRef: this.zoomContainerRef,
        onZoomImageLoad: this.onZoomImageLoad,
        ...positionProps
      });
    }

    return child;
  }

  calculatePositions() {
    const { elementDimensions, itemPosition } = this.state.inputPositionState;
    const { zoomImageDimensions, zoomContainerDimensions } = this.state;

    const smallImageSize = {
      width: elementDimensions.width,
      height: elementDimensions.height
    };

    const previewSize = {
      width: Math.floor(
        smallImageSize.width *
          (zoomContainerDimensions.width / zoomImageDimensions.width)
      ),
      height: Math.floor(
        smallImageSize.height *
          (zoomContainerDimensions.height / zoomImageDimensions.height)
      )
    };

    let position = { x: 0, y: 0 };
    const itemPositionAdj = { ...itemPosition };

    const previewOffset = {
      x: previewSize.width / 2,
      y: previewSize.height / 2
    };

    itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
    itemPositionAdj.x = Math.min(
      smallImageSize.width - previewOffset.x,
      itemPositionAdj.x
    );
    itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
    itemPositionAdj.y = Math.min(
      smallImageSize.height - previewOffset.y,
      itemPositionAdj.y
    );

    position = { ...itemPositionAdj };

    position.x = utils.convertRange(
      previewOffset.x,
      smallImageSize.width - previewOffset.x,
      zoomImageDimensions.width * -1 + zoomContainerDimensions.width,
      0,
      position.x
    );
    position.y = utils.convertRange(
      previewOffset.y,
      smallImageSize.height - previewOffset.y,
      zoomImageDimensions.height * -1 + zoomContainerDimensions.height,
      0,
      position.y
    );

    position.x = utils.invertNumber(
      zoomImageDimensions.width * -1 + zoomContainerDimensions.width,
      0,
      position.x
    );
    position.y = utils.invertNumber(
      zoomImageDimensions.height * -1 + zoomContainerDimensions.height,
      0,
      position.y
    );

    previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
    previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
    previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
    previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;

    return {
      position,
      smallImageSize,
      previewSize
    };
  }

  render() {
    const positionProps = this.calculatePositions();
    const { style, className } = this.props;

    return (
      <div style={style} className={className}>
        {React.Children.map(this.props.children, child =>
          this.decorateChild(child, positionProps)
        )}
      </div>
    );
  }
}

export default MagnifierContainer;
