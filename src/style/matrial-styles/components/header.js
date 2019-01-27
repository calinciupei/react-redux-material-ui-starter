import { container } from '../material.style';

const headerBarLinksStyle = theme => {
  const flexListMenu = {
    flex: 1
  };

  const listItem = {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  };

  return {
    list: {
      ...container,
      margin: 0,
      paddingLeft: '0',
      listStyle: 'none',
      paddingTop: '0',
      paddingBottom: '0',
      color: 'inherit',
      display: 'flex'
    },
    listItemLeft: {
      ...flexListMenu,
      ...listItem
    },
    listItemRight: {
      ...listItem,
      paddingTop: '14px',
      paddingBottom: '14px'
    },
    headerBar: {
      ...container,
      border: '0',
      borderRadius: '3px',
      padding: '0.625rem 0',
      color: '#555',
      width: '100%',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      position: 'relative',
      zIndex: 'unset'
    }
  };
};

export default headerBarLinksStyle;
