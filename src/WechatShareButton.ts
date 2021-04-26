import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function wechatLink(url: string, { title, image }: { title?: string; image?: string }) {
  assert(url, 'wechat.url');

  return (
    'http://connect.qq.com/widget/shareqq/index.html' +
    objectToGetParams({
      url,
      title,
      pics: image,
    })
  );
}

const WechatShareButton = createShareButton<{ title?: string; image?: string }>(
  'wechat',
  wechatLink,
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

export default WechatShareButton;
