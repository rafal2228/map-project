// @flow
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { loadQuestions } from '../thunks/questions.thunks';

const mapDispatchToProps = {
  loadQuestions
};

interface SetupProps {
  children: React$Node;

  loadQuestions: (url: string) => void;
}

class Setup extends Component<SetupProps> {
  componentDidMount() {
    this.props.loadQuestions(`${process.env.PUBLIC_URL}/assets/questions.json`);
  }

  render() {
    return this.props.children;
  }
}

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(Setup);
