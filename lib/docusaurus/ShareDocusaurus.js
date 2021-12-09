import React from 'react';
import PropTypes from 'prop-types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ShareComponent } from '..';

function ShareDocusaurus({ slug, title, tags }) {

    const { siteConfig } = useDocusaurusContext();
    const fullUrl = `${siteConfig.url}/${slug}`

    return <ShareComponent title={title} link={fullUrl} tags={tags} />;
}

ShareDocusaurus.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
};

export default ShareDocusaurus