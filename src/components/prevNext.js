import React from 'react';
import { Link } from 'gatsby';
import PrevNextStyles from '../styles/prevNextStyles.js';

const PrevNext = (props) => {
    const { previous, next } = props

        return (
            <PrevNextStyles>
            <ul
            style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-between',
                listStyle:'none',
                padding: '0',
            }}
            >
                {previous && 
                <li class="previous">
                    <Link to={previous.slug}>
                    <strong>← Previous Post</strong>{" "} <br/>
                    {previous.title}
                    </Link></li>}

                {next && 
                <li class="next">
                    <Link to={next.slug}>
                    <strong>Next Post → </strong>{" "} <br/> 
                    {next.title}
                    </Link></li>}
            </ul>
            </PrevNextStyles>
        )
}

export default PrevNext;