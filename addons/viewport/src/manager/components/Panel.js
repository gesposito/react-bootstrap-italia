import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { baseFonts } from '@storybook/components';
import { document } from 'global';

import { resetViewport, viewportsTransformer } from './viewportInfo';
import { SelectViewport } from './SelectViewport';
import { RotateViewport } from './RotateViewport';
import {
  SET_STORY_DEFAULT_VIEWPORT_EVENT_ID,
  UNSET_STORY_DEFAULT_VIEWPORT_EVENT_ID,
  CONFIGURE_VIEWPORT_EVENT_ID,
  UPDATE_VIEWPORT_EVENT_ID,
  INITIAL_VIEWPORTS,
  DEFAULT_VIEWPORT,
} from '../../shared';

import * as styles from './styles';

const storybookIframe = 'storybook-preview-iframe';
const containerStyles = {
  padding: 15,
  width: '100%',
  boxSizing: 'border-box',
  ...baseFonts,
};

const getDefaultViewport = (viewports, candidateViewport) =>
  candidateViewport in viewports ? candidateViewport : Object.keys(viewports)[0];

const getViewports = viewports =>
  Object.keys(viewports).length > 0 ? viewports : INITIAL_VIEWPORTS;

export class Panel extends Component {
  static propTypes = {
    channel: PropTypes.shape({}).isRequired,
    api: PropTypes.shape({}).isRequired,
  };

  static defaultOptions = {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: DEFAULT_VIEWPORT,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      viewport: DEFAULT_VIEWPORT,
      defaultViewport: DEFAULT_VIEWPORT,
      viewports: viewportsTransformer(INITIAL_VIEWPORTS),
      isLandscape: false,
    };
  }

  componentDidMount() {
    const { channel, api } = this.props;

    this.iframe = document.getElementById(storybookIframe);

    channel.on(UPDATE_VIEWPORT_EVENT_ID, this.changeViewport);
    channel.on(CONFIGURE_VIEWPORT_EVENT_ID, this.configure);
    channel.on(SET_STORY_DEFAULT_VIEWPORT_EVENT_ID, this.setStoryDefaultViewport);
    channel.on(UNSET_STORY_DEFAULT_VIEWPORT_EVENT_ID, this.unsetStoryDefaultViewport);

    this.unsubscribeFromOnStory = api.onStory(() => {
      this.changeViewport(this.state.defaultViewport);
    });
  }

  componentWillUnmount() {
    const { channel } = this.props;

    if (this.unsubscribeFromOnStory) {
      this.unsubscribeFromOnStory();
    }

    channel.removeListener(UPDATE_VIEWPORT_EVENT_ID, this.changeViewport);
    channel.removeListener(CONFIGURE_VIEWPORT_EVENT_ID, this.configure);
    channel.removeListener(SET_STORY_DEFAULT_VIEWPORT_EVENT_ID, this.setStoryDefaultViewport);
    channel.removeListener(UNSET_STORY_DEFAULT_VIEWPORT_EVENT_ID, this.unsetStoryDefaultViewport);
  }

  setStoryDefaultViewport = viewport => {
    const { viewports } = this.state;
    const defaultViewport = getDefaultViewport(viewports, viewport);

    this.setState(
      {
        storyDefaultViewport: defaultViewport,
        viewport: defaultViewport,
      },
      this.updateIframe
    );
  };

  unsetStoryDefaultViewport = () => {
    this.setState(
      {
        storyDefaultViewport: undefined,
        viewport: this.state.defaultViewport,
      },
      this.updateIframe
    );
  };

  configure = (options = Panel.defaultOptions) => {
    const viewports = getViewports(options.viewports);
    const defaultViewport = getDefaultViewport(viewports, options.defaultViewport);

    this.setState(
      {
        defaultViewport,
        viewport: defaultViewport,
        viewports: viewportsTransformer(viewports),
      },
      this.updateIframe
    );
  };

  iframe = undefined;

  changeViewport = viewport => {
    const { viewport: previousViewport } = this.state;

    if (previousViewport !== viewport) {
      this.setState(
        {
          viewport,
          isLandscape: false,
        },
        this.updateIframe
      );
    }
  };

  toggleLandscape = () => {
    const { isLandscape } = this.state;

    this.setState({ isLandscape: !isLandscape }, this.updateIframe);
  };

  updateIframe = () => {
    const { viewports, viewport: viewportKey, isLandscape } = this.state;
    const viewport = viewports[viewportKey] || resetViewport;

    if (!this.iframe) {
      throw new Error('Cannot find Storybook iframe');
    }

    Object.keys(viewport.styles).forEach(prop => {
      this.iframe.style[prop] = viewport.styles[prop];
    });

    if (isLandscape) {
      this.iframe.style.height = viewport.styles.width;
      this.iframe.style.width = viewport.styles.height;
    }
  };

  render() {
    const {
      isLandscape,
      defaultViewport,
      storyDefaultViewport = defaultViewport,
      viewport,
      viewports,
    } = this.state;

    const disableDefault = viewport === storyDefaultViewport;
    const disabledStyles = disableDefault ? styles.disabled : {};

    const buttonStyles = {
      ...styles.button,
      ...disabledStyles,
      marginTop: 30,
      padding: 20,
    };

    return (
      <div style={containerStyles}>
        <SelectViewport
          viewports={viewports}
          defaultViewport={storyDefaultViewport}
          activeViewport={viewport}
          onChange={e => this.changeViewport(e.target.value)}
        />

        <RotateViewport
          onClick={this.toggleLandscape}
          disabled={disableDefault}
          active={isLandscape}
        />

        <button
          style={buttonStyles}
          onClick={() => this.changeViewport(storyDefaultViewport)}
          disabled={disableDefault}
        >
          Reset Viewport
        </button>
      </div>
    );
  }
}
