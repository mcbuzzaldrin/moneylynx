import React, {useEffect, useState} from 'react';
import {useParams, Link } from 'react-router-dom';
import sanityClient from '../client';
// @ts-ignore
import qrCode  from '../static/images/qrcode.JPG'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source:string) {
    return builder.image(source);
}

export default function OnePost() {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
            { slug }
        ).then((data) => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div>Loading...</div>;
    return (
        <div className='OnePost'>
            <div>
                <h2>{postData['title']}</h2>
            </div>
            <img src={urlFor(postData['mainImage']).url()} alt='' />
            <br></br>
            <div>
                <BlockContent
                    blocks={postData['body']}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                    />
            </div>
            <span>Instructions: Scan QR Code for payment. <Link to='/contact-us'>Contact Us</Link> to confirm payment for delivery. </span>
            <img src={qrCode} alt='QR Code'/>
        </div>
    );
};