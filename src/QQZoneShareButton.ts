import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function qqzoneLink(url: string, { title, image }: { title?: string; image?: string }) {
  assert(url, 'qqzone.url');

  return (
    'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey' +
    objectToGetParams({
      url,
      title,
      pics: image,
    })
  );
}

const QQZoneShareButton = createShareButton<{ title?: string; image?: string }>(
  'qqzone',
  qqzoneLink,
  props => ({
    title: props.title,
    image: props.image,
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: 'screenCenter',
  },
);

export default QQZoneShareButton;
