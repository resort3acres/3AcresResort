import { useEffect } from 'react';

const AppSeo = () => {
useEffect(() => {
// Page title
document.title = "3 Acres Resort - Home of Luxury Stays ";

// Meta description
const description = "3 Acres Resort offers the best hospitality, luxurious rooms, and perfect family events.";
let metaDesc = document.querySelector('meta[name="description"]');
if (!metaDesc) {
  metaDesc = document.createElement('meta');
  metaDesc.name = 'description';
  document.head.appendChild(metaDesc);
}
metaDesc.content = description;

// Meta keywords (you can add more keywords here to improve Google ranking)
let metaKeywords = document.querySelector('meta[name="keywords"]');
if (!metaKeywords) {
  metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  document.head.appendChild(metaKeywords);
}
metaKeywords.content = "3 Acres Resort, luxury resort, hotel, family events, best resort in dehradun biggest resort"; // Add more keywords separated by commas

// Author
let metaAuthor = document.querySelector('meta[name="author"]');
if (!metaAuthor) {
  metaAuthor = document.createElement('meta');
  metaAuthor.name = 'author';
  document.head.appendChild(metaAuthor);
}
metaAuthor.content = "3 Acres Resort";

}, []);

  return null;
};

export default AppSeo;
