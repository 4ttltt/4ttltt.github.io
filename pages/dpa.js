import PropTypes from 'prop-types';
import StaticLayout from '../components/staticLayout';
import { getPageContentBySlug } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';

export default function DPA({ page, links }) {
  const {
    title, image, slug, markdown,
  } = page;
  return (
    <StaticLayout
      title={title}
      image={image}
      slug={slug}
      markdown={markdown}
      links={links}
    >
      <h2>Dpa - Hòa Võ - Sơ thiện, Trung Thiện, Hậu Thiện</h2>
      <iframe
        title="Dpa - Hòa Võ - Sơ thiện, Trung Thiện, Hậu Thiện"
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fhoa.vo.5855594%2Fvideos%2F2763907837201221%2F&show_text=false&width=560"
        width="560"
        height="314"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
      <br />
      <h2>Dpa 4td - Minh Nguyệt</h2>
      <iframe
        title="Dpa 4td - MN"
        width="100%"
        height="180"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2Fmn-4thanhde-latoithuong%2F"
        frameBorder="0"
      />
    </StaticLayout>
  );
}

export async function getStaticProps() {
  const links = getNavigationLinks();

  const page = getPageContentBySlug('home', [
    'title',
    'image',
    'slug',
    'content',
  ]);

  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
      links,
    },
  };
}

DPA.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string,
    markdown: PropTypes.string,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      href: PropTypes.string,
      navigation: PropTypes.bool,
      footer: PropTypes.bool,
    }),
  ).isRequired,
};
