import { NextSeo } from 'next-seo';
import { join } from 'path';
import PropTypes from 'prop-types';
import Layout from './layout';
import PrintMarkdown from './markdown/printMarkdown';
import WithImage from './markdown/withImage';

export default function DynamicLayout({
  slug, title, image, markdown, links, nomenu,
}) {
  const canonical = join(process.env.CANONICAL_URL, slug);
  return (
    <Layout pageTitle={title} links={links}>
      <NextSeo
        title={title}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: `${title} | Tứ Thánh Đế Là Tối Thượng`,
        }}
      />
      {image
        ? <WithImage markdown={markdown} showmenu={!nomenu} image={image} />
        : <PrintMarkdown markdown={markdown} showmenu={!nomenu} />}
    </Layout>
  );
}

DynamicLayout.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string,
  markdown: PropTypes.string.isRequired,
  nomenu: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
    navigation: PropTypes.bool,
    footer: PropTypes.bool,
  })).isRequired,
};

DynamicLayout.defaultProps = {
  image: '',
  nomenu: false,
};
