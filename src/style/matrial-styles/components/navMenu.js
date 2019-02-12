const navMenuStyle = theme => {
  const listItemLinks = {
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
      margin: 0,
      paddingLeft: '0',
      listStyle: 'none',
      paddingTop: '0',
      paddingBottom: '0',
      color: 'inherit'
    },
    listItem: { ...listItemLinks },
    listItemButton: {
      ...listItemLinks,
      marginLeft: '10px'
    }
  };
};

export default navMenuStyle;
