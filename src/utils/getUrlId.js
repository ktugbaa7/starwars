export default function getUrlId(url) { //verideki url kısmından id si ayrılır
    const urlId = url.split('/');
    const itemId = urlId[urlId.length - 2];
    return itemId;
  }