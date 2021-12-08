import React from 'react';
import PropTypes from 'prop-types';

function CaptionComponent({ label, link }) {
    if (link) {
        return (
            <a href={link}>
                <p style={{ textAlign: 'center' }}>{label ?? `File Link`}</p>
            </a>
        )
    } else {
        return <p style={{ textAlign: 'center' }} >{label ?? ``}</p>
    }
}

CaptionComponent.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string
};


export default CaptionComponent