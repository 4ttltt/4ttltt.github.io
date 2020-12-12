import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Tứ Thánh Đế Là Tối Thượng"
        description="Cung cấp những nội dung cốt lõi về Tứ Thánh Đế"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'http://tuthanhdelatoithuong.com',
          site_name: 'Tứ Thánh Đế Là Tối Thượng',
          images: [
            {
              url: 'http://tuthanhdelatoithuong.com/images/ducphat.png',
              width: 296,
              height: 330,
              alt: 'Đức Phật',
            },
          ],
        }}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
