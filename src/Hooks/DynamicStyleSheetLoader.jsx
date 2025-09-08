import { useEffect } from 'react';
import { useButtonContext } from '../ButtonContext';

function DynamicStyleSheetLoader() {
  const { btnColor } = useButtonContext();

  useEffect(() => {
    const id = 'dynamic-fh-style';
    const href = `https://fh-kit.com/buttons/v2/?pop=${btnColor}`;

    let existingLink = document.getElementById(id);

    if (existingLink) {
      existingLink.href = href;
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.media = 'screen';
      link.id = id;
      link.href = href;
      document.head.appendChild(link);
    }

    // Optional cleanup on unmount
    return () => {
      const link = document.getElementById(id);
      if (link) link.remove();
    };
  }, [btnColor]);

  return null; // No visual output
}

export default DynamicStyleSheetLoader;