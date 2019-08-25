import app from '../app';

const { name, url } = app;
const description = "Shaun Saker's Development Portfolio";

const SEO = {
  title: name,
  description,
  keywords: 'portfolio developer javascript react react-native firebase',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title: name,
    description,
    image: `${url}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: 'shaunsaker',
  },
  twitter: {
    handle: '',
    cardType: 'summary_large_image',
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-14:00',
    streetAddress: '',
    addressLocality: 'Cape Town',
    postalCode: '7441',
    addressCountry: 'South Africa',
    priceRange: '$$$$',
  },
};

export default SEO;
