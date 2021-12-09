import React from 'react';
import PropTypes from 'prop-types';
import {
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share'

function ShareComponent({ title, link, tags }) {

    return <div>
        <h2>Did you like it? Share It!</h2>
        <LinkedinShareButton url={link} title={title} >
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton
            url={link}
            title={title}
            via="AnguloMascarell"
            hashtags={tags ?? ``}
        >
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton
            subject={`Check this post about ${title}`}
            body={`Hi there, check the next post: ${title} \n\n`}
            url={link}
        >
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <WhatsappShareButton
            url={link}
            title={title}
        >
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton title={title} url={link}>
            <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <br style={{ marginBottom: `15px` }} />
    </div>;
}

ShareComponent.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
};

export default ShareComponent