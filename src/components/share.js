import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';
import '../styles/share.scss';

const Share = ({ twitterHandle, url, title }) => (
	<div className="post-social">
		<FacebookShareButton url={url} className="button is-outlined is-rounded facebook">
            <FacebookIcon/>
		</FacebookShareButton>
		<TwitterShareButton url={url} title={title} via={twitterHandle} className="button is-outlined is-rounded twitter">
            <TwitterIcon/>
		</TwitterShareButton>
		<LinkedinShareButton url={url} className="button is-outlined is-rounded linkedin">
        <LinkedinIcon/>
		</LinkedinShareButton>
		<WhatsappShareButton url={url} title={title} className="button is-outlined is-rounded whatsapp">
            <WhatsappIcon/>
		</WhatsappShareButton>
	</div>
);

export default Share;