import { container } from '../material.style';

const sectionStyle = theme => ({
    section: {
        ...container,
        marginBottom: '150px',
    },
    sectionHeader: {
        marginBottom: '50px',
    },
    sectionItem: {},
    sectionItemTitle: {
        marginBottom: '20px',
    }
});

export default sectionStyle;