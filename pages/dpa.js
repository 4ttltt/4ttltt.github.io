/* eslint-disable */
import PropTypes from 'prop-types';
import StaticLayout from '../components/staticLayout';
import { getPageContentBySlug } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';
import { MediaCategory, mediaType } from '../components/media';

const persons = {
  hv: 'Hòa Võ',
  mn: 'Minh Nguyệt',
  vtb: 'Vũ Thúy Bình',
  hy: 'Hoàng Yến',
  hn: 'Hạnh Ngọc',
  tnh: 'Tâm Như Hạnh',
  other: '??',
};

const hvVideos = [
  {
    title: 'Bố Thí, Trì Giới, Các cõi trời',
    type: mediaType.fbVideo,
    href: 'https://facebook.com/tuthanhde2018/videos/447762136235883/',
    speaker: persons.hv,
    author: persons.hv,
    date: '',
  },
  {
    title: 'Sơ thiện, Trung Thiện, Hậu Thiện',
    type: mediaType.fbVideo,
    href: 'https://www.facebook.com/hoa.vo.5855594/videos/2763907837201221/',
    speaker: persons.hv,
    author: persons.hv,
    date: '',
  },
  {
    title:
      'Khổ Thánh Đế cần phải liễu tri ?Khổ Tập Thánh đế cần phải đoạn tận ? Khổ Diệt Thánh Đế cần phải chứng ngộ ? Khổ Diệt Đạo Thánh Đế cần phải tu tập ?',
    href: 'https://www.facebook.com/2043864905835119/videos/2680505228832631/',
  },
  {
    title: 'Tứ thánh đế 12 nhân duyên & 8 thánh đạo',
    href: 'https://www.facebook.com/2043864905835119/videos/874087426400396/',
  },
  {
    title: '44 căn bản trí',
    href: 'https://www.facebook.com/2043864905835119/videos/156625042155062/',
  },
  {
    title: 'Đoạn tận ái',
    href: 'https://www.facebook.com/2043864905835119/videos/259062188757424/',
  },
  {
    title: 'Bài 12 tên cướp phần 1',
    href: 'https://www.facebook.com/2043864905835119/videos/675421196569714/',
  },
  {
    title: 'Bài 12 tên cướp phần 1 và phần 2.',
    href: 'https://www.facebook.com/2043864905835119/videos/1047202079008859',
  },
  {
    title: 'Bát thánh đạo - Bài Chánh tri kiến và chánh tư duy',
    href: 'https://www.facebook.com/2043864905835119/videos/367447570888823',
  },
  {
    title: 'Bát thánh đạo - Chánh ngữ/nghiệp/tinh tấn',
    href: 'https://www.facebook.com/2043864905835119/videos/299095561233049',
  },
  {
    title: 'Bát thánh đạo - Chánh niệm & chánh định',
    href: 'https://www.facebook.com/2043864905835119/videos/895623750930736',
  },
  {
    title: 'Thiền chỉ - Thiền quán',
    href: 'https://www.facebook.com/2043864905835119/videos/691156548382001/',
  },
].map((x) => ({
  ...x,
  type: mediaType.fbVideo,
  speaker: persons.hv,
  author: persons.hv,
  date: '',
}));

export default function DPA({ page, links }) {
  const {
    title, image, slug, markdown,
  } = page;
  const data = [
    {
      categoryName: 'Video Hoa Vo',
      items: hvVideos,
      // items: [
      //   {
      //     title: "Bố Thí, Trì Giới, Các cõi trời",
      //     type: mediaType.fbVideo,
      //     href:
      //       "https://facebook.com/tuthanhde2018/videos/447762136235883/",
      //     speaker: persons.hv,
      //     author: persons.hv,
      //     date: ""
      //   },
      //   {
      //     title: "Sơ thiện, Trung Thiện, Hậu Thiện",
      //     type: mediaType.fbVideo,
      //     href:
      //       "https://www.facebook.com/hoa.vo.5855594/videos/2763907837201221/",
      //     speaker: persons.hv,
      //     author: persons.hv,
      //     date: ""
      //   }
      // ]
    },
    {
      categoryName: 'Diệu Pháp Âm Sách 4 Thánh Đế',
      items: [
        {
          title: 'Sách Tứ Thánh Đế - Giọng Đọc - Minh Nguyệt',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2Fmn-4thanhde-latoithuong%2F',
          speaker: persons.mn,
          author: persons.hv,
          date: '',
        },
        {
          title: 'Sách Tứ Thánh Đế - Giọng Đọc - Hạnh Ngọc',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2F4thanhde-latoithuong-hanh-ngoc%2F',
          speaker: persons.hy,
          author: persons.hv,
          date: '',
        },
        {
          title: 'Sách Tứ Thánh Đế - Giọng Đọc - Hoàng Yến',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2Fhy-4thanhde-latoithuong%2F',
          speaker: persons.hy,
          author: persons.hv,
          date: '',
        },
        {
          title: 'Sách Tứ Thánh Đế - Giọng Đọc - Tâm Như Hạnh',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2F4thanhde-latoithuong-tam-nhu-hanh%2F',
          speaker: persons.hy,
          author: persons.hv,
          date: '',
        },
        {
          title: 'Sách Tứ Thánh Đế - Giọng Đọc - Thúy Bình',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2F4thanhde-latoithuong-thuy-binh%2F',
          speaker: persons.hy,
          author: persons.hv,
          date: '',
        },
      ],
    },
    {
      categoryName: 'Diệu Pháp Âm - Kinaya Theo Chủ Đề',
      items: [
        {
          title: 'Nikaya - Duyên Thọ',
          type: mediaType.mixCloud,
          href:
            'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fuy%C3%AAn-nguy%E1%BB%85n122%2Fplaylists%2Fduy%C3%AAn-th%E1%BB%8D%2F',
          speaker: persons.mn,
          author: persons.hv,
          date: '',
        },
      ],
    },
  ];
  return (
    <StaticLayout
      title={title}
      image={image}
      slug={slug}
      markdown={markdown}
      links={links}
    >
      {data.map((category) => (
        <MediaCategory {...category} />
      ))}
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
