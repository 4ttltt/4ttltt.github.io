import { useState } from 'react';
import PropTypes from 'prop-types';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import 'markdown-navbar/dist/navbar.css';
import MarkNav from 'markdown-navbar';
import markdownStyles from './markdown-styles.module.css';
import CustomLink from '../customLink';

export default function PrintMarkdown({ markdown, showmenu = true }) {
  const [navVisible, setNavVisible] = useState(false);
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
      },
    })
    .processSync(markdown).result;

  return (
    <div className="article">
      <div className={markdownStyles.markdown}>{content}</div>
      {showmenu ? (
        <div
          className={`${markdownStyles.nav} ${
            navVisible ? 'show' : markdownStyles.navHide
          }`}
        >
          <div
            role="button"
            tabIndex={0}
            aria-hidden="true"
            className={`${markdownStyles.navToggleBtn} ${
              navVisible ? markdownStyles.navToggleBtnActive : ''
            }`}
            onClick={() => {
              setNavVisible(!navVisible);
            }}
          >
            {navVisible ? 'MENU →' : '← MENU'}
          </div>
          <MarkNav className={markdownStyles.navContent} source={markdown} />
        </div>
      ) : null}
    </div>
  );
}

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  showmenu: PropTypes.bool,
};

PrintMarkdown.defaultProps = {
  showmenu: true,
};
