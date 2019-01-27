import { container } from '../material.style';

const jumbotronStyle = theme => ({
  jumbotron: {
    ...container,
    marginBottom: '50px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginTop: 0,
    marginBottom: '12px'
  },
  mainText: {
    color: theme.palette.primary.main
  }
});

export default jumbotronStyle;
