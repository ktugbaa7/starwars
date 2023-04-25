export default function getUrlId(url) { //verideki url kısmından id si ayrılır
    const splitedUrl = url.split('/');
    const itemId = splitedUrl[splitedUrl.length - 2];
    return itemId;
  }