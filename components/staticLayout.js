import { NextSeo } from 'next-seo';
import { join } from 'path';
import PropTypes from 'prop-types';
import Layout from './layout';

export default function StaticLayout({
  slug, title, links, children,
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
      {children}
    </Layout>
  );
}

StaticLayout.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
    navigation: PropTypes.bool,
    footer: PropTypes.bool,
  })).isRequired,
};

StaticLayout.defaultProps = {
};
