import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Portrait from '../images/portrait.png';


const Bio = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                owner
                social {
                    instagram
                }
            }
        }
    }

`)

    return (
        <div className="author" style={{ marginBottom: '30px'}}>
        <div id="portrait">
        <img src={Portrait} alt="Logo" height='100' width='100' style={{borderRadius: '50%'}} />
        </div>
        <div className="myInfo">
        <h3><strong>By: {data.site.siteMetadata.owner}</strong></h3>
        <p>
            <a href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}>Follow me on instragram</a>
        </p>
        </div>
        </div>
    )
}


export default Bio