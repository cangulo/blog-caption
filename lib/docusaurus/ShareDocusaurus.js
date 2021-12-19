import React from 'react';
import PropTypes from 'prop-types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ShareComponent } from '..';

function ShareDocusaurus({ preSlug, slug, title, tags }) {

    const { siteConfig } = useDocusaurusContext();
    let fullUrl = `${siteConfig.url}`

    if (preSlug) {
        fullUrl = `${fullUrl}/${preSlug}/${slug}`
    } else {
        fullUrl = `${fullUrl}/${slug}`
    }

    return <ShareComponent title={title} link={fullUrl} tags={tags} />;
}

ShareDocusaurus.propTypes = {
    preSlug: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
};

export default ShareDocusaurus