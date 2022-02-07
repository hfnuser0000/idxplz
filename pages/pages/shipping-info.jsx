import styled               from "styled-components";

import Link                 from "next/link";

import Layout               from "@/components/layout";
import Card                 from "@/components/card";

export async function getStaticProps(context) {
    return {
        props: {
            url: 'https://printinix.com/pages/shipping-info',
            title: 'Shipping Info',
            description: '',
        }, // will be passed to the page component as props
        revalidate: 60, // In seconds
    }
}

const Container = styled.div`
    .card {
        position: relative;
    }

    .description-card {
        background: #7771;
        margin: 2rem 0;

        > div {
            position: relative;
        }
    }

    .table-of-contents {
        background: #7771;
        margin: 2rem 0;

        > div {
            position: relative;
        }
    }

    .table-of-contents a {
        display: block;
    }
    
    .table-of-contents .index {
        display: inline-block;
        width: 3rem;
    }

    .anchor[id*="idx-"] {
        position: relative;
        top: -9rem;
        visibility: hidden;
    }
    table {
        width: 100%;
    }
    table tr:nth-child(2n+1) {
        background: #f8f8f8;
    }
    table tr td {
        padding: .5rem 0;
    }
`;

export default function ShopPage(props) {
    let {title, url, description} = props;

    return <Layout title={title} description={description} url={url}>
        <Container>
            <h1>Shipping Information</h1>
            <h2>Table of contents</h2>
            <Card className="table-of-contents">
                <div>
                    <Link href="#idx-1"><a>
                        <span className="index">I.</span>
                        General shipping</a></Link>
                    <Link href="#idx-2"><a>
                        <span className="index">II.</span>
                        When will i get my stuff?</a></Link>
                    <Link href="#idx-3"><a>
                        <span className="index">III.</span>
                        We ship to Europe with no customs charge and duties</a></Link>
                    <Link href="#idx-4"><a>
                        <span className="index">IV.</span>
                        We ship to Worldwide</a></Link>
                    <Link href="#idx-5"><a>
                        <span className="index">V.</span>
                        Tracking</a></Link>
                    <Link href="#idx-6"><a>
                        <span className="index">VI.</span>
                        Shipping multiple orders</a></Link>
                    <Link href="#idx-7"><a>
                        <span className="index">VII.</span>
                        Shipping to multiple locations</a></Link>
                    <Link href="#idx-8"><a>
                        <span className="index">VIII.</span>
                        Address changes</a></Link>
                    <Link href="#idx-9"><a>
                        <span className="index">IX.</span>
                        Customs charges and delays</a></Link>
                </div>
            </Card>
            <h2>General shipping</h2>
            <div className="anchor" id="idx-1"></div>
            <ul>
                <li>{`All products are made as ordered and printed on demand just for you, so they will be put through a production process, therefore there will be a Handling Time on them. Most Products Usually Ships Out Within 1-3 Days, Licensed Products Usually Ships Out Within 4-7 Days.`}</li>
                <li>{`Orders print and ship Monday-Friday.`}</li>
                <li>{`Some items may ship separately.`}</li>
            </ul>
            <h2>When will i get my stuff?</h2>
            <div className="anchor" id="idx-2"></div>
            <p>Once you placed your order, it will be processed as below:</p>
            <ul>
                <li>{`Fulfillment time: 2-5 business days. It might be increased to 6-7 business days or longer during special occasions (Christmas season, New Years, affected by disasters, Pandemic, etc.)`}</li>
                <li>{`Note: “Business days” are considered to be Monday through Friday, not including holidays or scheduled service interruptions. Please check with your local postal service for all other regional restrictions and observed holidays that may delay receipt of your shipment.`}</li>
            </ul>
            <p>Follow after the fulfillment time the shipping time which is:</p>
            <ul>
                <li>{`United States: 3-6 business days.`}</li>
                <li>{`Europe: 4-6 business days.`}</li>
                <li>{`International: 9-13 business days.`}</li>
            </ul>
            <p>{`Shipment times vary per order, please bear with us. Don't hesitate to email us if you have any questions regarding your shipment!`}</p>
            <p>Note: Your order may arrive in multiple packages and shipments. Depending upon the type, quantity and weight of item(s) in your order, we may pack and ship them in multiple packages. You will not be charged for multiple packages and shipments other than the amount that appears at checkout.</p>
            <h2>We ship to Europe with no customs charge and duties</h2>
            <div className="anchor" id="idx-3"></div>
            <p>Applied since July 30th 2021, the dramatic changes in the delivery services to Europe include:</p>
            <ul>
                <li>{`Shorten delivery times: 4-6 business days.`}</li>
                <li>{`No customs charge and duties: European customers do not need to pay customs charge and duties anymore when they receive the package.`}</li>
                <li>{`Low risk of loss of Goods in Transit. Previously, the orders are shipped from the US, so the delivery cost is quite expensive and the loss of goods is also a lot.`}</li>
            </ul>
            <h3>List of EU countries support</h3>
            <table><tbody><tr><td className="has-text-align-left" data-align="left"><strong>Country Code</strong></td><td><strong>Country Name</strong></td><td><strong>Country Zone</strong></td></tr><tr><td className="has-text-align-left" data-align="left">DE</td><td>Germany</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">AT</td><td>Austria</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">BE</td><td>Belgium</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">BG</td><td>Bulgaria</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">CY</td><td>Cyprus</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">HR</td><td>Croatia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">ES</td><td>Spain</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">EE</td><td>Estonia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">FR</td><td>France</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">GR</td><td>Greece</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">HU</td><td>Hungary</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">IE</td><td>Ireland</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">IT</td><td>Italy</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">LV</td><td>Latvia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">LI</td><td>Liechtenstein</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">LT</td><td>Lithuania</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">LU</td><td>Luxembourg</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">MT</td><td>Malta</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">NL</td><td>Netherlands</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">PL</td><td>Poland</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">PT</td><td>Portugal</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">RO</td><td>Romania</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">GB</td><td>United Kingdom</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">SM</td><td>San Marino</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">SK</td><td>Slovakia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">SI</td><td>Slovenia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">CH</td><td>Switzerland</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">CZ</td><td>Czech Republic</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">VA</td><td>Holy See (Vatican City State)</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">DK</td><td>Denmark</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">FI</td><td>Finland</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">SE</td><td>Sweden</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">AD</td><td>Andorra</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">GI</td><td>Gibraltar</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">IM</td><td>Isle of Man</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">MC</td><td>Monaco</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">ME</td><td>Montenegro</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">AX</td><td>Aland Islands</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">GP</td><td>Guadeloupe</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">IS</td><td>Iceland</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">MQ</td><td>Martinique</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">NO</td><td>Norway</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">NC</td><td>New Caledonia</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">RE</td><td>Réunion</td><td>Europe</td></tr><tr><td className="has-text-align-left" data-align="left">RU</td><td>Russian Federation</td><td>Europe</td></tr></tbody></table>
            <h2>We ship to Worldwide</h2>
            <div className="anchor" id="idx-4"></div>
            <p>We offer worldwide shipping options too - no matter where you are, you can buy from us! Estimated delivery time for most of our products is 9-13 business days after fulfillment to arrive. Currently we only offer Standard Shipping for International. We apologies for the inconvenience.</p>
            <h2>Tracking</h2>
            <div className="anchor" id="idx-5"></div>
            <p>When available, we will send you a tracking number with the confirmation email so that you can track the package online.</p>
            <h2>Shipping multiple orders</h2>
            <div className="anchor" id="idx-6"></div>
            <p>Multiple orders placed on the same day cannot be combined.</p>
            <h2>Shipping to multiple locations</h2>
            <div className="anchor" id="idx-7"></div>
            <p>Unfortunately, we cannot split up an order and ship to multiple locations. If you wish to send items to different locations, you will need to place a separate order for each shipping address.</p>
            <h2>Address changes</h2>
            <div className="anchor" id="idx-8"></div>
            <p>Unfortunately, we do not have the ability to change the shipping address once an order goes into processing.</p>
            <h2>Customs charges and delays</h2>
            <div className="anchor" id="idx-9"></div>
            <p>Some countries may require import tax, duties and customs fees for the imports. These charges, if applicable, are determined and charged by the Customs office of your country. Paying these charges is your responsibility. There might also be delays in delivery times due to customs checks which is out of our control. For more information, please contact your local Customs office.</p>
        </Container>
    </Layout>;
}
